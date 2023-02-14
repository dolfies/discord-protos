const proto = require("./index");

const encoded = proto.PreloadedUserSettings.toBase64({
    status: {
        status: {
            value: "online",
        },
        custom_status: {
            text: "hello world",
        },
    },
});

const decoded = proto.PreloadedUserSettings.fromBase64(encoded);

console.log(encoded, decoded);
