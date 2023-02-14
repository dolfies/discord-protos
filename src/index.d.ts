declare const _exports: {
    discord_users: typeof proto.discord_protos.discord_users;
    PreloadedUserSettings: typeof PreloadedUserSettings;
    FrecencyUserSettings: typeof FrecencyUserSettings;
};
export = _exports;
import proto = require("./proto");
declare class PreloadedUserSettings extends proto.discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings {
    /**
     * @param {proto.discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings} data
     * @returns {string}
     */
    static toBase64(data: proto.discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings): string;
    /**
     * @param {string} base64
     * @returns {proto.discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings}
     */
    static fromBase64(base64: string): proto.discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings;
}
declare class FrecencyUserSettings extends proto.discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings {
    /**
     * @param {proto.discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings} data
     * @returns {string}
     */
    static toBase64(data: proto.discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings): string;
    /**
     * @param {string} base64
     * @returns {proto.discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings}
     */
    static fromBase64(base64: string): proto.discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings;
}
