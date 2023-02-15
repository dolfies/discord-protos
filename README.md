# Discord Protocol Buffers
Reverse-engineering Discord's user settings protobufs.

This repository provides protocol buffer files for Discord's user settings automatically generated and automatically updated. The protobufs are provided as .proto files in the out/ directory, one file per settings type.

These protobufs are used by the Discord clients for user settings.

Provided for educational purposes only.

## Usage
### Note
Automating user accounts is against the Discord ToS. This repository is a proof of concept and I cannot recommend using it. Do so at your own risk.

### Installation
```
# with npm
npm install discord-protos

# with yarn
yarn add discord-protos

# with pnpm
pnpm add discord-protos
```

### Example
```js
const { PreloadedUserSettings } = require('discord-protos');

const encoded = PreloadedUserSettings.toBase64({
    status: {
        status: {
            value: "online",
        },
        customStatus: {
            text: "Hello World",
        emojiId: 0n,
        emojiName: "",
        expiresAtMs: 0n,
        },
    },
});

const decoded = PreloadedUserSettings.fromBase64(encoded);

console.log(encoded, decoded);
```


## Mapping
The following table shows which protobuf user settings correspond to which .proto file.

| Type | Value                             | File                        | Use                                                |
| ---- | --------------------------------- | --------------------------- | -------------------------------------------------- |
| 1    | `PRELOADED_USER_SETTINGS`         | PreloadedUserSettings.proto | General Discord user settings.                     |
| 2    | `FRECENCY_AND_FAVORITES_SETTINGS` | FrecencyUserSettings.proto  | Frecency and favorites storage for various things. |
| 3    | `TEST_SETTINGS`                   | -                           | Unknown.                                           |


### Protobufs
The .proto files can be compiled down to Python or JavaScript files by running `npm run py` or `npm run js`. This requires protoc to be installed.

Base64-encoded data for these protobufs are provided by the `GET /users/@me/settings-proto/{type}` endpoint. For preloaded user settings, base64-encoded data is provided in the `USER_SETTINGS_PROTO` key of the READY event received in the Discord Gateway.

### Development
Running `pnpm load` will extract and save the latest protobufs to the out/ directory.
