const proto = require("./proto");

function toBase64(data) {
    return Buffer.from(this.encode(data).finish()).toString("base64");
}

function fromBase64(base64) {
    return this.decode(Buffer.from(base64, "base64")).toJSON();
}

class PreloadedUserSettings extends proto.discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings {
    /**
     * @param {proto.discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings} data
     * @returns {string}
     */
    static toBase64(data) {
        return toBase64.call(this, data);
    }

    /**
     * @param {string} base64
     * @returns {proto.discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings}
     */
    static fromBase64(base64) {
        return fromBase64.call(this, base64);
    }
}

class FrecencyUserSettings extends proto.discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings {
    /**
     * @param {proto.discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings} data
     * @returns {string}
     */
    static toBase64(data) {
        return toBase64.call(this, data);
    }

    /**
     * @param {string} base64
     * @returns {proto.discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings}
     */
    static fromBase64(base64) {
        return fromBase64.call(this, base64);
    }
}

module.exports = {
    PreloadedUserSettings,
    FrecencyUserSettings,
    ...proto.discord_protos,
};
