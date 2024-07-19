import puppeteer from "puppeteer";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

// For the JS template, all we need to do is update the exports at the bottom
const JS_TEMPLATE = `import { MessageType } from "@protobuf-ts/runtime";

function toBase64(this: MessageType<any>, data) {
    return Buffer.from(this.toBinary(data)).toString("base64");
}

function fromBase64(this: MessageType<any>, base64: string) {
    return this.fromBinary(Buffer.from(base64, "base64"))
}

declare module "@protobuf-ts/runtime" {
    interface MessageType<T> {
        toBase64(data: T): string;
        fromBase64(base64: string): T;
    }
}

MessageType.prototype.fromBase64 = fromBase64
MessageType.prototype.toBase64 = toBase64

{{ protos_exports }}
`;

// For the Python template, we need to update both imports and the __all__ variable, as well as bump the version number
const PY_TEMPLATE = `from __future__ import annotations

from enum import Enum as _Enum
from typing import TYPE_CHECKING

__version__ = '{{ version }}'

if TYPE_CHECKING:
    from google.protobuf.message import Message as _Message

    {{ protos_equals }} = _Message
else:
{{ protos_imports }}

__all__ = (
    '__version__',
    'UserSettingsType',
{{ exports }}
)


class UserSettingsType(_Enum):
    preloaded_user_settings = 1
    frecency_user_settings = 2
    test_settings = 3


UserSettingsImpl = {
    UserSettingsType.preloaded_user_settings: PreloadedUserSettings,
    UserSettingsType.frecency_user_settings: FrecencyUserSettings,
    UserSettingsType.test_settings: None,
}
`;

const PARSE_SCRIPT = readFileSync(join(__dirname, "parse.js"), "utf8");

async function main() {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto("https://canary.discord.com/app", { waitUntil: "networkidle0" });

    const protos = await page.evaluate(`${PARSE_SCRIPT}; protos`);

    for (const [name, proto] of Object.entries(protos)) {
        writeFileSync(join(__dirname, "..", "discord_protos", name + ".proto"), proto.data);
    }
    await browser.close();

    // Check if we have any changes using git
    const changes = execSync("git status --porcelain").toString().trim();
    if (changes.length === 0) {
        console.log("No changes detected, exiting...");
        return;
    }

    const packageJson = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), "utf8"));

    // Bump the version number
    const version = packageJson.version.split(".").map((x: string) => parseInt(x)).map((x: number, i: number) => i === 2 ? x + 1 : x).join(".");
    packageJson.version = version;

    // This is very cursed
    // For protoc to parse any new protos, we have to edit the script in the package.json to include the filenames
    const js = packageJson.scripts.js.split(" ").filter((x) => !x.endsWith(".proto")).join(" ");
    const py = packageJson.scripts.py.split(" ").filter((x) => !x.endsWith(".proto")).join(" ");
    packageJson.scripts.js = `${js} ${Object.keys(protos).map((x) => x + ".proto").join(" ")}`;
    packageJson.scripts.py = `${py} ${Object.keys(protos).map((x) => x + ".proto").join(" ")}`;
    writeFileSync(join(__dirname, "..", "package.json"), JSON.stringify(packageJson, null, 4));

    // Update the JS template
    const jsExports = Object.keys(protos).map((x) => `export * from "./proto/${x}";`).join("\n");
    writeFileSync(join(__dirname, "..", "src", "index.ts"), JS_TEMPLATE.replace("{{ protos_exports }}", jsExports));

    // Update the Python template
    const pyExports = Object.keys(protos).map((x) => `    '${x}',`).join("\n");
    const pyImports = Object.keys(protos).map((x) => `    from .${x}_pb2 import ${x}`).join("\n");
    const pyEquals = Object.keys(protos).join(" = ");
    writeFileSync(
        join(__dirname, "..", "discord_protos", "__init__.py"),
        PY_TEMPLATE.replace("{{ version }}", version).replace("{{ exports }}", pyExports).replace("{{ protos_imports }}", pyImports).replace("{{ protos_equals }}", pyEquals)
);
}

main();
