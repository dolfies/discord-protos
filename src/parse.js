if (!getModules) {
    let wpCache;
    window.webpackChunkdiscord_app.push([["discord-protos"], {}, (r) => (wpCache = r.c)]);

    function getModules(prop) {
        const results = [];
        for (let m of Object.values(wpCache)) {
            try {
                if (!m.exports || m.exports === window) continue;
                if (m.exports[prop]) results.push(m.exports);

                for (let ex in m.exports) {
                    if (m.exports[ex][prop]) results.push(m.exports[ex]);
                }
            } catch {}
        }
        return results;
    }
}

// Map the type ints to their names
const REAL_TYPES = {
    1: "double",
    2: "float",
    3: "int64",
    4: "uint64",
    5: "int32",
    6: "fixed64",
    8: "bool",
    9: "string",
    12: "bytes",
    13: "uint32",
};

function parseType(field) {
    // We extract the actual field if possible
    if (typeof field === "function") {
        field = field();
        // If it's a real type, we just return it
    } else if (typeof field === "number") {
        return [REAL_TYPES[field], []];
    }

    var type,
        structs = [];

    // The kind gives us clues on how to find the type
    switch (field.kind) {
        case "message":
            type = field.T().typeName;
            if (type.startsWith("discord")) {
                type = parseName(type);
            }
            break;
        case "scalar":
            type = REAL_TYPES[field.T];
            break;
        case "map":
            type = `map<${parseType(field.K)[0]}, ${parseType(field.V)[0]}>`;
            break;
        case "enum":
            type = parseName(field.T()[0]);
            break;
        default:
            throw new Error(`Unknown field type: ${field?.kind || field}`);
    }

    // Now we lazily discover any protos in the fields
    for (let t of [field.T, field.K, field.V]) {
        t = t?.T || t;

        if (typeof t === "function" && (!t().typeName || t().typeName.startsWith("discord_protos"))) {
            t = t();
            if (Array.isArray(t)) {
                structs.push(parseEnum(t));
            } else {
                const extraStruct = parseProto(t);
                structs.push(...(extraStruct.structs || []));
                delete extraStruct.structs;
                structs.push(extraStruct);
            }
        }
    }

    return [type, structs];
}

function parseName(name) {
    return name.split(".").slice(-1)[0];
}

function flattenField(field) {
    const [type, structs] = parseType(field);
    return [
        {
            number: field.no,
            name: field.name,
            kind: field.kind,
            type: type,
            optional: field.opt,
            repeated: Boolean(field.repeat),
        },
        structs,
    ];
}

function parseEnum(enun) {
    const [name, data] = enun;
    return {
        name: parseName(name),
        kind: "enum",
        values: Object.entries(data)
            .filter(([k, _]) => isNaN(Number(k)))
            .map(([k, v]) => ({
                name: k,
                value: v,
            })),
    };
}

function parseProto(proto) {
    const fields = [];
    const structs = [];
    proto.fields.forEach(function (field) {
        const [f, s] = flattenField(field);
        fields.push(f);
        structs.push(...s);
    });

    const seen = new Set();
    return {
        name: parseName(proto.typeName),
        kind: "message",
        fields: fields,
        structs: structs.filter((v) => (seen.has(v.name) ? false : seen.add(v.name))),
    };
}

function extractProtos() {
    const results = {};
    for (const proto of getModules("typeName")) {
        if (!proto.typeName.includes("UserSettings")) {
            continue;
        }
        const name = parseName(proto.typeName);
        console.log(`Parsing ${name}...`);
        results[name] = parseProto(proto);
    }
    return results;
}

function createProtoField(field) {
    return `${field.optional ? "optional " : field.repeated ? "repeated " : ""}${field.type} ${field.name} = ${field.number};`;
}

function createProtoFile(proto) {
    const lines = [`syntax = "proto3";\n`, `package discord_protos.discord_users.v1.${proto.name};\n`, `message ${proto.name} {`];

    proto.structs.forEach((struct) => {
        lines.push(`  ${struct.kind} ${struct.name} {`);

        switch (struct.kind) {
            case "enum":
                struct.values.forEach((value) => {
                    lines.push(`    ${value.name.toUpperCase()} = ${value.value};`);
                });
                break;
            case "message":
                struct.fields.forEach((field) => {
                    lines.push(`    ${createProtoField(field)}`);
                });
                break;
            default:
                throw new Error(`Unknown struct kind: ${struct.kind}`);
        }

        lines.push(`  }\n`);
    });

    proto.fields.forEach((field) => {
        lines.push(`  ${createProtoField(field)}`);
    });

    // Check if we're using the funny Google well-knowns and insert an import statement (I love Discord)
    if (lines.some((line) => line.includes("google.protobuf"))) {
        lines.splice(1, 0, `import "google/protobuf/wrappers.proto";\nimport "google/protobuf/timestamp.proto";\n`);
    }

    lines.push("}\n");
    return lines.join("\n");
}

const protos = extractProtos();
for (const [key, proto] of Object.entries(protos)) {
    const data = createProtoFile(proto);
    protos[key].data = data;
    if (window.DiscordNative?.fileManager) {
        window.DiscordNative.fileManager.saveWithDialog(data, `${proto.name}.proto`);
    } else {
        console.log(data);
    }
}
