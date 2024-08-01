# Discord Protocol Buffers
Reverse-engineering Discord's protobufs.

This repository provides protocol buffer files for all protobufs found in Discord's client source, automatically generated and automatically updated. The protobufs are provided as .proto files in the `out/` directory.

These protobufs are used by Discord clients for transmitting data like user settings and premium marketing.

Provided for educational purposes only.

### Credits

- [arHSM](https://github.com/arHSM) for originally reverse-engineering the technology behind Discord's protobuf implementation.

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

# with pip
pip install discord-protos
```

### Example
JavaScript:
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

Python:
```py
import base64
from discord_protos import PreloadedUserSettings

settings = PreloadedUserSettings()
encoded = base64.b64encode(settings.ParseDict({
    'status': {
        'status': {
            'value': 'online',
        },
        'custom_status': {
            'text': 'Hello World',
            'emoji_id': 0,
            'emoji_name': '',
            'expires_at_ms': 0,
        },
    },
}).SerializeToString())

decoded = PreloadedUserSettings.FromString(base64.b64decode(encoded))

print(encoded, decoded)
```

The following table shows which protobuf user settings correspond to which .proto file (the Python package also provides a `UserSettingsType` enum for convenience).

| Type | Value                             | File                        | Use                                                |
| ---- | --------------------------------- | --------------------------- | -------------------------------------------------- |
| 1    | `PRELOADED_USER_SETTINGS`         | PreloadedUserSettings.proto | General Discord user settings.                     |
| 2    | `FRECENCY_AND_FAVORITES_SETTINGS` | FrecencyUserSettings.proto  | Frecency and favorites storage for various things. |
| 3    | `TEST_SETTINGS`                   | -                           | Unknown.                                           |

Base64-encoded data for these protobufs are provided by the `GET /users/@me/settings-proto/{type}` endpoint. For preloaded user settings, base64-encoded data is provided in the `user_settings_proto` key of the `READY` event received in the Discord Gateway, as well as in `USER_SETTINGS_PROTO_UPDATE` events.

### Protobufs
The .proto files can be compiled down to Python or JavaScript files by running `npm run py` or `npm run js`. This requires protoc to be installed.


### Development
Running `pnpm load` will extract and save the latest protobufs to the `discord_protos/` directory.
