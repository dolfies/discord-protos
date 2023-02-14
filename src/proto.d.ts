import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace discord_protos. */
export namespace discord_protos {

    /** Namespace discord_users. */
    namespace discord_users {

        /** Namespace v1. */
        namespace v1 {

            /** Namespace FrecencyUserSettings. */
            namespace FrecencyUserSettings {

                /** Properties of a FrecencyUserSettings. */
                interface IFrecencyUserSettings {

                    /** FrecencyUserSettings versions */
                    versions?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IVersions|null);

                    /** FrecencyUserSettings favorite_gifs */
                    favorite_gifs?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIFs|null);

                    /** FrecencyUserSettings favorite_stickers */
                    favorite_stickers?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteStickers|null);

                    /** FrecencyUserSettings sticker_frecency */
                    sticker_frecency?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IStickerFrecency|null);

                    /** FrecencyUserSettings favorite_emojis */
                    favorite_emojis?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteEmojis|null);

                    /** FrecencyUserSettings emoji_frecency */
                    emoji_frecency?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IEmojiFrecency|null);

                    /** FrecencyUserSettings application_command_frecency */
                    application_command_frecency?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IApplicationCommandFrecency|null);
                }

                /** Represents a FrecencyUserSettings. */
                class FrecencyUserSettings implements IFrecencyUserSettings {

                    /**
                     * Constructs a new FrecencyUserSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings);

                    /** FrecencyUserSettings versions. */
                    public versions?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IVersions|null);

                    /** FrecencyUserSettings favorite_gifs. */
                    public favorite_gifs?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIFs|null);

                    /** FrecencyUserSettings favorite_stickers. */
                    public favorite_stickers?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteStickers|null);

                    /** FrecencyUserSettings sticker_frecency. */
                    public sticker_frecency?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IStickerFrecency|null);

                    /** FrecencyUserSettings favorite_emojis. */
                    public favorite_emojis?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteEmojis|null);

                    /** FrecencyUserSettings emoji_frecency. */
                    public emoji_frecency?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IEmojiFrecency|null);

                    /** FrecencyUserSettings application_command_frecency. */
                    public application_command_frecency?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IApplicationCommandFrecency|null);

                    /** FrecencyUserSettings _versions. */
                    public _versions?: "versions";

                    /** FrecencyUserSettings _favorite_gifs. */
                    public _favorite_gifs?: "favorite_gifs";

                    /** FrecencyUserSettings _favorite_stickers. */
                    public _favorite_stickers?: "favorite_stickers";

                    /** FrecencyUserSettings _sticker_frecency. */
                    public _sticker_frecency?: "sticker_frecency";

                    /** FrecencyUserSettings _favorite_emojis. */
                    public _favorite_emojis?: "favorite_emojis";

                    /** FrecencyUserSettings _emoji_frecency. */
                    public _emoji_frecency?: "emoji_frecency";

                    /** FrecencyUserSettings _application_command_frecency. */
                    public _application_command_frecency?: "application_command_frecency";

                    /**
                     * Creates a new FrecencyUserSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FrecencyUserSettings instance
                     */
                    public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings;

                    /**
                     * Encodes the specified FrecencyUserSettings message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.verify|verify} messages.
                     * @param message FrecencyUserSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FrecencyUserSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.verify|verify} messages.
                     * @param message FrecencyUserSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.IFrecencyUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FrecencyUserSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FrecencyUserSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings;

                    /**
                     * Decodes a FrecencyUserSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FrecencyUserSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings;

                    /**
                     * Verifies a FrecencyUserSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FrecencyUserSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FrecencyUserSettings
                     */
                    public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings;

                    /**
                     * Creates a plain object from a FrecencyUserSettings message. Also converts values to other types if specified.
                     * @param message FrecencyUserSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FrecencyUserSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FrecencyUserSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FrecencyUserSettings {

                    /** Properties of a Versions. */
                    interface IVersions {

                        /** Versions client_version */
                        client_version?: (number|null);

                        /** Versions server_version */
                        server_version?: (number|null);

                        /** Versions data_version */
                        data_version?: (number|null);
                    }

                    /** Represents a Versions. */
                    class Versions implements IVersions {

                        /**
                         * Constructs a new Versions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IVersions);

                        /** Versions client_version. */
                        public client_version: number;

                        /** Versions server_version. */
                        public server_version: number;

                        /** Versions data_version. */
                        public data_version: number;

                        /**
                         * Creates a new Versions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Versions instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IVersions): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions;

                        /**
                         * Encodes the specified Versions message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions.verify|verify} messages.
                         * @param message Versions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IVersions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Versions message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions.verify|verify} messages.
                         * @param message Versions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IVersions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Versions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Versions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions;

                        /**
                         * Decodes a Versions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Versions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions;

                        /**
                         * Verifies a Versions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Versions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Versions
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions;

                        /**
                         * Creates a plain object from a Versions message. Also converts values to other types if specified.
                         * @param message Versions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.Versions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Versions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Versions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** GIFType enum. */
                    enum GIFType {
                        NONE = 0,
                        IMAGE = 1,
                        VIDEO = 2
                    }

                    /** Properties of a FavoriteGIF. */
                    interface IFavoriteGIF {

                        /** FavoriteGIF format */
                        format?: (discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.GIFType|null);

                        /** FavoriteGIF src */
                        src?: (string|null);

                        /** FavoriteGIF width */
                        width?: (number|null);

                        /** FavoriteGIF height */
                        height?: (number|null);

                        /** FavoriteGIF order */
                        order?: (number|null);
                    }

                    /** Represents a FavoriteGIF. */
                    class FavoriteGIF implements IFavoriteGIF {

                        /**
                         * Constructs a new FavoriteGIF.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIF);

                        /** FavoriteGIF format. */
                        public format: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.GIFType;

                        /** FavoriteGIF src. */
                        public src: string;

                        /** FavoriteGIF width. */
                        public width: number;

                        /** FavoriteGIF height. */
                        public height: number;

                        /** FavoriteGIF order. */
                        public order: number;

                        /**
                         * Creates a new FavoriteGIF instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FavoriteGIF instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIF): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF;

                        /**
                         * Encodes the specified FavoriteGIF message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF.verify|verify} messages.
                         * @param message FavoriteGIF message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIF, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FavoriteGIF message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF.verify|verify} messages.
                         * @param message FavoriteGIF message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIF, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FavoriteGIF message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FavoriteGIF
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF;

                        /**
                         * Decodes a FavoriteGIF message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FavoriteGIF
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF;

                        /**
                         * Verifies a FavoriteGIF message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FavoriteGIF message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FavoriteGIF
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF;

                        /**
                         * Creates a plain object from a FavoriteGIF message. Also converts values to other types if specified.
                         * @param message FavoriteGIF
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIF, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FavoriteGIF to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FavoriteGIF
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FavoriteGIFs. */
                    interface IFavoriteGIFs {

                        /** FavoriteGIFs gifs */
                        gifs?: ({ [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIF }|null);

                        /** FavoriteGIFs hide_tooltip */
                        hide_tooltip?: (boolean|null);
                    }

                    /** Represents a FavoriteGIFs. */
                    class FavoriteGIFs implements IFavoriteGIFs {

                        /**
                         * Constructs a new FavoriteGIFs.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIFs);

                        /** FavoriteGIFs gifs. */
                        public gifs: { [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIF };

                        /** FavoriteGIFs hide_tooltip. */
                        public hide_tooltip: boolean;

                        /**
                         * Creates a new FavoriteGIFs instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FavoriteGIFs instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIFs): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs;

                        /**
                         * Encodes the specified FavoriteGIFs message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs.verify|verify} messages.
                         * @param message FavoriteGIFs message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIFs, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FavoriteGIFs message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs.verify|verify} messages.
                         * @param message FavoriteGIFs message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteGIFs, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FavoriteGIFs message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FavoriteGIFs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs;

                        /**
                         * Decodes a FavoriteGIFs message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FavoriteGIFs
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs;

                        /**
                         * Verifies a FavoriteGIFs message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FavoriteGIFs message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FavoriteGIFs
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs;

                        /**
                         * Creates a plain object from a FavoriteGIFs message. Also converts values to other types if specified.
                         * @param message FavoriteGIFs
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteGIFs, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FavoriteGIFs to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FavoriteGIFs
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FavoriteStickers. */
                    interface IFavoriteStickers {

                        /** FavoriteStickers sticker_ids */
                        sticker_ids?: ((number|Long)[]|null);
                    }

                    /** Represents a FavoriteStickers. */
                    class FavoriteStickers implements IFavoriteStickers {

                        /**
                         * Constructs a new FavoriteStickers.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteStickers);

                        /** FavoriteStickers sticker_ids. */
                        public sticker_ids: (number|Long)[];

                        /**
                         * Creates a new FavoriteStickers instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FavoriteStickers instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteStickers): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers;

                        /**
                         * Encodes the specified FavoriteStickers message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers.verify|verify} messages.
                         * @param message FavoriteStickers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteStickers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FavoriteStickers message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers.verify|verify} messages.
                         * @param message FavoriteStickers message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteStickers, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FavoriteStickers message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FavoriteStickers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers;

                        /**
                         * Decodes a FavoriteStickers message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FavoriteStickers
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers;

                        /**
                         * Verifies a FavoriteStickers message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FavoriteStickers message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FavoriteStickers
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers;

                        /**
                         * Creates a plain object from a FavoriteStickers message. Also converts values to other types if specified.
                         * @param message FavoriteStickers
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteStickers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FavoriteStickers to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FavoriteStickers
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FrecencyItem. */
                    interface IFrecencyItem {

                        /** FrecencyItem total_uses */
                        total_uses?: (number|null);

                        /** FrecencyItem recent_uses */
                        recent_uses?: ((number|Long)[]|null);

                        /** FrecencyItem frecency */
                        frecency?: (number|null);

                        /** FrecencyItem score */
                        score?: (number|null);
                    }

                    /** Represents a FrecencyItem. */
                    class FrecencyItem implements IFrecencyItem {

                        /**
                         * Constructs a new FrecencyItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem);

                        /** FrecencyItem total_uses. */
                        public total_uses: number;

                        /** FrecencyItem recent_uses. */
                        public recent_uses: (number|Long)[];

                        /** FrecencyItem frecency. */
                        public frecency: number;

                        /** FrecencyItem score. */
                        public score: number;

                        /**
                         * Creates a new FrecencyItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FrecencyItem instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem;

                        /**
                         * Encodes the specified FrecencyItem message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem.verify|verify} messages.
                         * @param message FrecencyItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FrecencyItem message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem.verify|verify} messages.
                         * @param message FrecencyItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FrecencyItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FrecencyItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem;

                        /**
                         * Decodes a FrecencyItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FrecencyItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem;

                        /**
                         * Verifies a FrecencyItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FrecencyItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FrecencyItem
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem;

                        /**
                         * Creates a plain object from a FrecencyItem message. Also converts values to other types if specified.
                         * @param message FrecencyItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FrecencyItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FrecencyItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FrecencyItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StickerFrecency. */
                    interface IStickerFrecency {

                        /** StickerFrecency stickers */
                        stickers?: ({ [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem }|null);
                    }

                    /** Represents a StickerFrecency. */
                    class StickerFrecency implements IStickerFrecency {

                        /**
                         * Constructs a new StickerFrecency.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IStickerFrecency);

                        /** StickerFrecency stickers. */
                        public stickers: { [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem };

                        /**
                         * Creates a new StickerFrecency instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StickerFrecency instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IStickerFrecency): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency;

                        /**
                         * Encodes the specified StickerFrecency message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency.verify|verify} messages.
                         * @param message StickerFrecency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IStickerFrecency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StickerFrecency message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency.verify|verify} messages.
                         * @param message StickerFrecency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IStickerFrecency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StickerFrecency message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StickerFrecency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency;

                        /**
                         * Decodes a StickerFrecency message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StickerFrecency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency;

                        /**
                         * Verifies a StickerFrecency message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StickerFrecency message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StickerFrecency
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency;

                        /**
                         * Creates a plain object from a StickerFrecency message. Also converts values to other types if specified.
                         * @param message StickerFrecency
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.StickerFrecency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StickerFrecency to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StickerFrecency
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FavoriteEmojis. */
                    interface IFavoriteEmojis {

                        /** FavoriteEmojis emojis */
                        emojis?: (string[]|null);
                    }

                    /** Represents a FavoriteEmojis. */
                    class FavoriteEmojis implements IFavoriteEmojis {

                        /**
                         * Constructs a new FavoriteEmojis.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteEmojis);

                        /** FavoriteEmojis emojis. */
                        public emojis: string[];

                        /**
                         * Creates a new FavoriteEmojis instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FavoriteEmojis instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteEmojis): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis;

                        /**
                         * Encodes the specified FavoriteEmojis message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis.verify|verify} messages.
                         * @param message FavoriteEmojis message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteEmojis, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FavoriteEmojis message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis.verify|verify} messages.
                         * @param message FavoriteEmojis message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFavoriteEmojis, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FavoriteEmojis message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FavoriteEmojis
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis;

                        /**
                         * Decodes a FavoriteEmojis message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FavoriteEmojis
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis;

                        /**
                         * Verifies a FavoriteEmojis message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FavoriteEmojis message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FavoriteEmojis
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis;

                        /**
                         * Creates a plain object from a FavoriteEmojis message. Also converts values to other types if specified.
                         * @param message FavoriteEmojis
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.FavoriteEmojis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FavoriteEmojis to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FavoriteEmojis
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EmojiFrecency. */
                    interface IEmojiFrecency {

                        /** EmojiFrecency emojis */
                        emojis?: ({ [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem }|null);
                    }

                    /** Represents an EmojiFrecency. */
                    class EmojiFrecency implements IEmojiFrecency {

                        /**
                         * Constructs a new EmojiFrecency.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IEmojiFrecency);

                        /** EmojiFrecency emojis. */
                        public emojis: { [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem };

                        /**
                         * Creates a new EmojiFrecency instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EmojiFrecency instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IEmojiFrecency): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency;

                        /**
                         * Encodes the specified EmojiFrecency message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency.verify|verify} messages.
                         * @param message EmojiFrecency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IEmojiFrecency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EmojiFrecency message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency.verify|verify} messages.
                         * @param message EmojiFrecency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IEmojiFrecency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EmojiFrecency message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EmojiFrecency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency;

                        /**
                         * Decodes an EmojiFrecency message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EmojiFrecency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency;

                        /**
                         * Verifies an EmojiFrecency message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EmojiFrecency message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EmojiFrecency
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency;

                        /**
                         * Creates a plain object from an EmojiFrecency message. Also converts values to other types if specified.
                         * @param message EmojiFrecency
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.EmojiFrecency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EmojiFrecency to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EmojiFrecency
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ApplicationCommandFrecency. */
                    interface IApplicationCommandFrecency {

                        /** ApplicationCommandFrecency application_commands */
                        application_commands?: ({ [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem }|null);
                    }

                    /** Represents an ApplicationCommandFrecency. */
                    class ApplicationCommandFrecency implements IApplicationCommandFrecency {

                        /**
                         * Constructs a new ApplicationCommandFrecency.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IApplicationCommandFrecency);

                        /** ApplicationCommandFrecency application_commands. */
                        public application_commands: { [k: string]: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IFrecencyItem };

                        /**
                         * Creates a new ApplicationCommandFrecency instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ApplicationCommandFrecency instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IApplicationCommandFrecency): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency;

                        /**
                         * Encodes the specified ApplicationCommandFrecency message. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency.verify|verify} messages.
                         * @param message ApplicationCommandFrecency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IApplicationCommandFrecency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ApplicationCommandFrecency message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency.verify|verify} messages.
                         * @param message ApplicationCommandFrecency message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.IApplicationCommandFrecency, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ApplicationCommandFrecency message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ApplicationCommandFrecency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency;

                        /**
                         * Decodes an ApplicationCommandFrecency message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ApplicationCommandFrecency
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency;

                        /**
                         * Verifies an ApplicationCommandFrecency message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ApplicationCommandFrecency message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ApplicationCommandFrecency
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency;

                        /**
                         * Creates a plain object from an ApplicationCommandFrecency message. Also converts values to other types if specified.
                         * @param message ApplicationCommandFrecency
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.FrecencyUserSettings.FrecencyUserSettings.ApplicationCommandFrecency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ApplicationCommandFrecency to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ApplicationCommandFrecency
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }

            /** Namespace PreloadedUserSettings. */
            namespace PreloadedUserSettings {

                /** Properties of a PreloadedUserSettings. */
                interface IPreloadedUserSettings {

                    /** PreloadedUserSettings versions */
                    versions?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVersions|null);

                    /** PreloadedUserSettings inbox */
                    inbox?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IInboxSettings|null);

                    /** PreloadedUserSettings guilds */
                    guilds?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAllGuildSettings|null);

                    /** PreloadedUserSettings user_content */
                    user_content?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IUserContentSettings|null);

                    /** PreloadedUserSettings voice_and_video */
                    voice_and_video?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVoiceAndVideoSettings|null);

                    /** PreloadedUserSettings text_and_images */
                    text_and_images?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ITextAndImagesSettings|null);

                    /** PreloadedUserSettings notifications */
                    notifications?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.INotificationSettings|null);

                    /** PreloadedUserSettings privacy */
                    privacy?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IPrivacySettings|null);

                    /** PreloadedUserSettings debug */
                    debug?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IDebugSettings|null);

                    /** PreloadedUserSettings game_library */
                    game_library?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGameLibrarySettings|null);

                    /** PreloadedUserSettings status */
                    status?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IStatusSettings|null);

                    /** PreloadedUserSettings localization */
                    localization?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ILocalizationSettings|null);

                    /** PreloadedUserSettings appearance */
                    appearance?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAppearanceSettings|null);

                    /** PreloadedUserSettings guild_folders */
                    guild_folders?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolders|null);

                    /** PreloadedUserSettings favorites */
                    favorites?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavorites|null);

                    /** PreloadedUserSettings audio_context_settings */
                    audio_context_settings?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioSettings|null);

                    /** PreloadedUserSettings communities */
                    communities?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICommunitiesSettings|null);
                }

                /** Represents a PreloadedUserSettings. */
                class PreloadedUserSettings implements IPreloadedUserSettings {

                    /**
                     * Constructs a new PreloadedUserSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings);

                    /** PreloadedUserSettings versions. */
                    public versions?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVersions|null);

                    /** PreloadedUserSettings inbox. */
                    public inbox?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IInboxSettings|null);

                    /** PreloadedUserSettings guilds. */
                    public guilds?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAllGuildSettings|null);

                    /** PreloadedUserSettings user_content. */
                    public user_content?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IUserContentSettings|null);

                    /** PreloadedUserSettings voice_and_video. */
                    public voice_and_video?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVoiceAndVideoSettings|null);

                    /** PreloadedUserSettings text_and_images. */
                    public text_and_images?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ITextAndImagesSettings|null);

                    /** PreloadedUserSettings notifications. */
                    public notifications?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.INotificationSettings|null);

                    /** PreloadedUserSettings privacy. */
                    public privacy?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IPrivacySettings|null);

                    /** PreloadedUserSettings debug. */
                    public debug?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IDebugSettings|null);

                    /** PreloadedUserSettings game_library. */
                    public game_library?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGameLibrarySettings|null);

                    /** PreloadedUserSettings status. */
                    public status?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IStatusSettings|null);

                    /** PreloadedUserSettings localization. */
                    public localization?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ILocalizationSettings|null);

                    /** PreloadedUserSettings appearance. */
                    public appearance?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAppearanceSettings|null);

                    /** PreloadedUserSettings guild_folders. */
                    public guild_folders?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolders|null);

                    /** PreloadedUserSettings favorites. */
                    public favorites?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavorites|null);

                    /** PreloadedUserSettings audio_context_settings. */
                    public audio_context_settings?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioSettings|null);

                    /** PreloadedUserSettings communities. */
                    public communities?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICommunitiesSettings|null);

                    /** PreloadedUserSettings _versions. */
                    public _versions?: "versions";

                    /** PreloadedUserSettings _inbox. */
                    public _inbox?: "inbox";

                    /** PreloadedUserSettings _guilds. */
                    public _guilds?: "guilds";

                    /** PreloadedUserSettings _user_content. */
                    public _user_content?: "user_content";

                    /** PreloadedUserSettings _voice_and_video. */
                    public _voice_and_video?: "voice_and_video";

                    /** PreloadedUserSettings _text_and_images. */
                    public _text_and_images?: "text_and_images";

                    /** PreloadedUserSettings _notifications. */
                    public _notifications?: "notifications";

                    /** PreloadedUserSettings _privacy. */
                    public _privacy?: "privacy";

                    /** PreloadedUserSettings _debug. */
                    public _debug?: "debug";

                    /** PreloadedUserSettings _game_library. */
                    public _game_library?: "game_library";

                    /** PreloadedUserSettings _status. */
                    public _status?: "status";

                    /** PreloadedUserSettings _localization. */
                    public _localization?: "localization";

                    /** PreloadedUserSettings _appearance. */
                    public _appearance?: "appearance";

                    /** PreloadedUserSettings _guild_folders. */
                    public _guild_folders?: "guild_folders";

                    /** PreloadedUserSettings _favorites. */
                    public _favorites?: "favorites";

                    /** PreloadedUserSettings _audio_context_settings. */
                    public _audio_context_settings?: "audio_context_settings";

                    /** PreloadedUserSettings _communities. */
                    public _communities?: "communities";

                    /**
                     * Creates a new PreloadedUserSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PreloadedUserSettings instance
                     */
                    public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings;

                    /**
                     * Encodes the specified PreloadedUserSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.verify|verify} messages.
                     * @param message PreloadedUserSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PreloadedUserSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.verify|verify} messages.
                     * @param message PreloadedUserSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.IPreloadedUserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PreloadedUserSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PreloadedUserSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings;

                    /**
                     * Decodes a PreloadedUserSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PreloadedUserSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings;

                    /**
                     * Verifies a PreloadedUserSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PreloadedUserSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PreloadedUserSettings
                     */
                    public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings;

                    /**
                     * Creates a plain object from a PreloadedUserSettings message. Also converts values to other types if specified.
                     * @param message PreloadedUserSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PreloadedUserSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PreloadedUserSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace PreloadedUserSettings {

                    /** Properties of a Versions. */
                    interface IVersions {

                        /** Versions client_version */
                        client_version?: (number|null);

                        /** Versions server_version */
                        server_version?: (number|null);

                        /** Versions data_version */
                        data_version?: (number|null);
                    }

                    /** Represents a Versions. */
                    class Versions implements IVersions {

                        /**
                         * Constructs a new Versions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVersions);

                        /** Versions client_version. */
                        public client_version: number;

                        /** Versions server_version. */
                        public server_version: number;

                        /** Versions data_version. */
                        public data_version: number;

                        /**
                         * Creates a new Versions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Versions instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVersions): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions;

                        /**
                         * Encodes the specified Versions message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions.verify|verify} messages.
                         * @param message Versions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVersions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Versions message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions.verify|verify} messages.
                         * @param message Versions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVersions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Versions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Versions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions;

                        /**
                         * Decodes a Versions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Versions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions;

                        /**
                         * Verifies a Versions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Versions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Versions
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions;

                        /**
                         * Creates a plain object from a Versions message. Also converts values to other types if specified.
                         * @param message Versions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Versions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Versions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Versions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** InboxTab enum. */
                    enum InboxTab {
                        UNSPECIFIED = 0,
                        MENTIONS = 1,
                        UNREADS = 2,
                        TODOS = 3,
                        FOR_YOU = 4
                    }

                    /** Properties of an InboxSettings. */
                    interface IInboxSettings {

                        /** InboxSettings current_tab */
                        current_tab?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxTab|null);

                        /** InboxSettings viewed_tutorial */
                        viewed_tutorial?: (boolean|null);
                    }

                    /** Represents an InboxSettings. */
                    class InboxSettings implements IInboxSettings {

                        /**
                         * Constructs a new InboxSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IInboxSettings);

                        /** InboxSettings current_tab. */
                        public current_tab: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxTab;

                        /** InboxSettings viewed_tutorial. */
                        public viewed_tutorial: boolean;

                        /**
                         * Creates a new InboxSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InboxSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IInboxSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings;

                        /**
                         * Encodes the specified InboxSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings.verify|verify} messages.
                         * @param message InboxSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IInboxSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InboxSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings.verify|verify} messages.
                         * @param message InboxSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IInboxSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InboxSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InboxSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings;

                        /**
                         * Decodes an InboxSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InboxSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings;

                        /**
                         * Verifies an InboxSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InboxSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InboxSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings;

                        /**
                         * Creates a plain object from an InboxSettings message. Also converts values to other types if specified.
                         * @param message InboxSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.InboxSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InboxSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InboxSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ChannelSettings. */
                    interface IChannelSettings {

                        /** ChannelSettings collapsed_in_inbox */
                        collapsed_in_inbox?: (boolean|null);
                    }

                    /** Represents a ChannelSettings. */
                    class ChannelSettings implements IChannelSettings {

                        /**
                         * Constructs a new ChannelSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IChannelSettings);

                        /** ChannelSettings collapsed_in_inbox. */
                        public collapsed_in_inbox: boolean;

                        /**
                         * Creates a new ChannelSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChannelSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IChannelSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings;

                        /**
                         * Encodes the specified ChannelSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings.verify|verify} messages.
                         * @param message ChannelSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IChannelSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ChannelSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings.verify|verify} messages.
                         * @param message ChannelSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IChannelSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChannelSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChannelSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings;

                        /**
                         * Decodes a ChannelSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ChannelSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings;

                        /**
                         * Verifies a ChannelSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ChannelSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChannelSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings;

                        /**
                         * Creates a plain object from a ChannelSettings message. Also converts values to other types if specified.
                         * @param message ChannelSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ChannelSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChannelSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ChannelSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GuildSettings. */
                    interface IGuildSettings {

                        /** GuildSettings channels */
                        channels?: ({ [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IChannelSettings }|null);

                        /** GuildSettings hub_progress */
                        hub_progress?: (number|null);

                        /** GuildSettings guild_onboarding_progress */
                        guild_onboarding_progress?: (number|null);

                        /** GuildSettings guild_recents_dismissed_at */
                        guild_recents_dismissed_at?: (google.protobuf.ITimestamp|null);

                        /** GuildSettings dismissed_guild_content */
                        dismissed_guild_content?: (Uint8Array|null);
                    }

                    /** Represents a GuildSettings. */
                    class GuildSettings implements IGuildSettings {

                        /**
                         * Constructs a new GuildSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildSettings);

                        /** GuildSettings channels. */
                        public channels: { [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IChannelSettings };

                        /** GuildSettings hub_progress. */
                        public hub_progress: number;

                        /** GuildSettings guild_onboarding_progress. */
                        public guild_onboarding_progress: number;

                        /** GuildSettings guild_recents_dismissed_at. */
                        public guild_recents_dismissed_at?: (google.protobuf.ITimestamp|null);

                        /** GuildSettings dismissed_guild_content. */
                        public dismissed_guild_content: Uint8Array;

                        /** GuildSettings _guild_recents_dismissed_at. */
                        public _guild_recents_dismissed_at?: "guild_recents_dismissed_at";

                        /**
                         * Creates a new GuildSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GuildSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings;

                        /**
                         * Encodes the specified GuildSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings.verify|verify} messages.
                         * @param message GuildSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GuildSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings.verify|verify} messages.
                         * @param message GuildSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GuildSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GuildSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings;

                        /**
                         * Decodes a GuildSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GuildSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings;

                        /**
                         * Verifies a GuildSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GuildSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GuildSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings;

                        /**
                         * Creates a plain object from a GuildSettings message. Also converts values to other types if specified.
                         * @param message GuildSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GuildSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GuildSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AllGuildSettings. */
                    interface IAllGuildSettings {

                        /** AllGuildSettings guilds */
                        guilds?: ({ [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildSettings }|null);
                    }

                    /** Represents an AllGuildSettings. */
                    class AllGuildSettings implements IAllGuildSettings {

                        /**
                         * Constructs a new AllGuildSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAllGuildSettings);

                        /** AllGuildSettings guilds. */
                        public guilds: { [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildSettings };

                        /**
                         * Creates a new AllGuildSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AllGuildSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAllGuildSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings;

                        /**
                         * Encodes the specified AllGuildSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings.verify|verify} messages.
                         * @param message AllGuildSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAllGuildSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AllGuildSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings.verify|verify} messages.
                         * @param message AllGuildSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAllGuildSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AllGuildSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AllGuildSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings;

                        /**
                         * Decodes an AllGuildSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AllGuildSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings;

                        /**
                         * Verifies an AllGuildSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AllGuildSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AllGuildSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings;

                        /**
                         * Creates a plain object from an AllGuildSettings message. Also converts values to other types if specified.
                         * @param message AllGuildSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AllGuildSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AllGuildSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AllGuildSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserContentSettings. */
                    interface IUserContentSettings {

                        /** UserContentSettings dismissed_contents */
                        dismissed_contents?: (Uint8Array|null);

                        /** UserContentSettings last_dismissed_outbound_promotion_start_date */
                        last_dismissed_outbound_promotion_start_date?: (google.protobuf.IStringValue|null);

                        /** UserContentSettings premium_tier_0_modal_dismissed_at */
                        premium_tier_0_modal_dismissed_at?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a UserContentSettings. */
                    class UserContentSettings implements IUserContentSettings {

                        /**
                         * Constructs a new UserContentSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IUserContentSettings);

                        /** UserContentSettings dismissed_contents. */
                        public dismissed_contents: Uint8Array;

                        /** UserContentSettings last_dismissed_outbound_promotion_start_date. */
                        public last_dismissed_outbound_promotion_start_date?: (google.protobuf.IStringValue|null);

                        /** UserContentSettings premium_tier_0_modal_dismissed_at. */
                        public premium_tier_0_modal_dismissed_at?: (google.protobuf.ITimestamp|null);

                        /** UserContentSettings _last_dismissed_outbound_promotion_start_date. */
                        public _last_dismissed_outbound_promotion_start_date?: "last_dismissed_outbound_promotion_start_date";

                        /** UserContentSettings _premium_tier_0_modal_dismissed_at. */
                        public _premium_tier_0_modal_dismissed_at?: "premium_tier_0_modal_dismissed_at";

                        /**
                         * Creates a new UserContentSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserContentSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IUserContentSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings;

                        /**
                         * Encodes the specified UserContentSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings.verify|verify} messages.
                         * @param message UserContentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IUserContentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserContentSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings.verify|verify} messages.
                         * @param message UserContentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IUserContentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserContentSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserContentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings;

                        /**
                         * Decodes a UserContentSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserContentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings;

                        /**
                         * Verifies a UserContentSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserContentSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserContentSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings;

                        /**
                         * Creates a plain object from a UserContentSettings message. Also converts values to other types if specified.
                         * @param message UserContentSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.UserContentSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserContentSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UserContentSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VideoFilterBackgroundBlur. */
                    interface IVideoFilterBackgroundBlur {

                        /** VideoFilterBackgroundBlur use_blur */
                        use_blur?: (boolean|null);
                    }

                    /** Represents a VideoFilterBackgroundBlur. */
                    class VideoFilterBackgroundBlur implements IVideoFilterBackgroundBlur {

                        /**
                         * Constructs a new VideoFilterBackgroundBlur.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterBackgroundBlur);

                        /** VideoFilterBackgroundBlur use_blur. */
                        public use_blur: boolean;

                        /**
                         * Creates a new VideoFilterBackgroundBlur instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoFilterBackgroundBlur instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterBackgroundBlur): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur;

                        /**
                         * Encodes the specified VideoFilterBackgroundBlur message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur.verify|verify} messages.
                         * @param message VideoFilterBackgroundBlur message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterBackgroundBlur, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoFilterBackgroundBlur message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur.verify|verify} messages.
                         * @param message VideoFilterBackgroundBlur message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterBackgroundBlur, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoFilterBackgroundBlur message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoFilterBackgroundBlur
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur;

                        /**
                         * Decodes a VideoFilterBackgroundBlur message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoFilterBackgroundBlur
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur;

                        /**
                         * Verifies a VideoFilterBackgroundBlur message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoFilterBackgroundBlur message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoFilterBackgroundBlur
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur;

                        /**
                         * Creates a plain object from a VideoFilterBackgroundBlur message. Also converts values to other types if specified.
                         * @param message VideoFilterBackgroundBlur
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterBackgroundBlur, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoFilterBackgroundBlur to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VideoFilterBackgroundBlur
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VideoFilterAsset. */
                    interface IVideoFilterAsset {

                        /** VideoFilterAsset id */
                        id?: (number|Long|null);

                        /** VideoFilterAsset asset_hash */
                        asset_hash?: (string|null);
                    }

                    /** Represents a VideoFilterAsset. */
                    class VideoFilterAsset implements IVideoFilterAsset {

                        /**
                         * Constructs a new VideoFilterAsset.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterAsset);

                        /** VideoFilterAsset id. */
                        public id: (number|Long);

                        /** VideoFilterAsset asset_hash. */
                        public asset_hash: string;

                        /**
                         * Creates a new VideoFilterAsset instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoFilterAsset instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterAsset): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset;

                        /**
                         * Encodes the specified VideoFilterAsset message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset.verify|verify} messages.
                         * @param message VideoFilterAsset message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoFilterAsset message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset.verify|verify} messages.
                         * @param message VideoFilterAsset message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoFilterAsset message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoFilterAsset
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset;

                        /**
                         * Decodes a VideoFilterAsset message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoFilterAsset
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset;

                        /**
                         * Verifies a VideoFilterAsset message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoFilterAsset message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoFilterAsset
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset;

                        /**
                         * Creates a plain object from a VideoFilterAsset message. Also converts values to other types if specified.
                         * @param message VideoFilterAsset
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VideoFilterAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoFilterAsset to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VideoFilterAsset
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SoundboardSettings. */
                    interface ISoundboardSettings {

                        /** SoundboardSettings volume */
                        volume?: (number|null);
                    }

                    /** Represents a SoundboardSettings. */
                    class SoundboardSettings implements ISoundboardSettings {

                        /**
                         * Constructs a new SoundboardSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ISoundboardSettings);

                        /** SoundboardSettings volume. */
                        public volume: number;

                        /**
                         * Creates a new SoundboardSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SoundboardSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ISoundboardSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings;

                        /**
                         * Encodes the specified SoundboardSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings.verify|verify} messages.
                         * @param message SoundboardSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ISoundboardSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SoundboardSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings.verify|verify} messages.
                         * @param message SoundboardSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ISoundboardSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SoundboardSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SoundboardSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings;

                        /**
                         * Decodes a SoundboardSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SoundboardSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings;

                        /**
                         * Verifies a SoundboardSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SoundboardSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SoundboardSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings;

                        /**
                         * Creates a plain object from a SoundboardSettings message. Also converts values to other types if specified.
                         * @param message SoundboardSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.SoundboardSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SoundboardSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SoundboardSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VoiceAndVideoSettings. */
                    interface IVoiceAndVideoSettings {

                        /** VoiceAndVideoSettings blur */
                        blur?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterBackgroundBlur|null);

                        /** VoiceAndVideoSettings preset_option */
                        preset_option?: (number|null);

                        /** VoiceAndVideoSettings custom_asset */
                        custom_asset?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterAsset|null);

                        /** VoiceAndVideoSettings always_preview_video */
                        always_preview_video?: (google.protobuf.IBoolValue|null);

                        /** VoiceAndVideoSettings afk_timeout */
                        afk_timeout?: (google.protobuf.IUInt32Value|null);

                        /** VoiceAndVideoSettings stream_notifications_enabled */
                        stream_notifications_enabled?: (google.protobuf.IBoolValue|null);

                        /** VoiceAndVideoSettings native_phone_integration_enabled */
                        native_phone_integration_enabled?: (google.protobuf.IBoolValue|null);

                        /** VoiceAndVideoSettings soundboard_settings */
                        soundboard_settings?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ISoundboardSettings|null);
                    }

                    /** Represents a VoiceAndVideoSettings. */
                    class VoiceAndVideoSettings implements IVoiceAndVideoSettings {

                        /**
                         * Constructs a new VoiceAndVideoSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVoiceAndVideoSettings);

                        /** VoiceAndVideoSettings blur. */
                        public blur?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterBackgroundBlur|null);

                        /** VoiceAndVideoSettings preset_option. */
                        public preset_option: number;

                        /** VoiceAndVideoSettings custom_asset. */
                        public custom_asset?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVideoFilterAsset|null);

                        /** VoiceAndVideoSettings always_preview_video. */
                        public always_preview_video?: (google.protobuf.IBoolValue|null);

                        /** VoiceAndVideoSettings afk_timeout. */
                        public afk_timeout?: (google.protobuf.IUInt32Value|null);

                        /** VoiceAndVideoSettings stream_notifications_enabled. */
                        public stream_notifications_enabled?: (google.protobuf.IBoolValue|null);

                        /** VoiceAndVideoSettings native_phone_integration_enabled. */
                        public native_phone_integration_enabled?: (google.protobuf.IBoolValue|null);

                        /** VoiceAndVideoSettings soundboard_settings. */
                        public soundboard_settings?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ISoundboardSettings|null);

                        /** VoiceAndVideoSettings _always_preview_video. */
                        public _always_preview_video?: "always_preview_video";

                        /** VoiceAndVideoSettings _afk_timeout. */
                        public _afk_timeout?: "afk_timeout";

                        /** VoiceAndVideoSettings _stream_notifications_enabled. */
                        public _stream_notifications_enabled?: "stream_notifications_enabled";

                        /** VoiceAndVideoSettings _native_phone_integration_enabled. */
                        public _native_phone_integration_enabled?: "native_phone_integration_enabled";

                        /** VoiceAndVideoSettings _soundboard_settings. */
                        public _soundboard_settings?: "soundboard_settings";

                        /**
                         * Creates a new VoiceAndVideoSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VoiceAndVideoSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVoiceAndVideoSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings;

                        /**
                         * Encodes the specified VoiceAndVideoSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings.verify|verify} messages.
                         * @param message VoiceAndVideoSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVoiceAndVideoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VoiceAndVideoSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings.verify|verify} messages.
                         * @param message VoiceAndVideoSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IVoiceAndVideoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VoiceAndVideoSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VoiceAndVideoSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings;

                        /**
                         * Decodes a VoiceAndVideoSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VoiceAndVideoSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings;

                        /**
                         * Verifies a VoiceAndVideoSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VoiceAndVideoSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VoiceAndVideoSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings;

                        /**
                         * Creates a plain object from a VoiceAndVideoSettings message. Also converts values to other types if specified.
                         * @param message VoiceAndVideoSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.VoiceAndVideoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VoiceAndVideoSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VoiceAndVideoSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TextAndImagesSettings. */
                    interface ITextAndImagesSettings {

                        /** TextAndImagesSettings diversity_surrogate */
                        diversity_surrogate?: (google.protobuf.IStringValue|null);

                        /** TextAndImagesSettings use_rich_chat_input */
                        use_rich_chat_input?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings use_thread_sidebar */
                        use_thread_sidebar?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings render_spoilers */
                        render_spoilers?: (google.protobuf.IStringValue|null);

                        /** TextAndImagesSettings emoji_picker_collapsed_sections */
                        emoji_picker_collapsed_sections?: (string[]|null);

                        /** TextAndImagesSettings sticker_picker_collapsed_sections */
                        sticker_picker_collapsed_sections?: (string[]|null);

                        /** TextAndImagesSettings view_image_descriptions */
                        view_image_descriptions?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings show_command_suggestions */
                        show_command_suggestions?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings inline_attachment_media */
                        inline_attachment_media?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings inline_embed_media */
                        inline_embed_media?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings gif_auto_play */
                        gif_auto_play?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings render_embeds */
                        render_embeds?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings render_reactions */
                        render_reactions?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings animate_emoji */
                        animate_emoji?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings animate_stickers */
                        animate_stickers?: (google.protobuf.IUInt32Value|null);

                        /** TextAndImagesSettings enable_tts_command */
                        enable_tts_command?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings message_display_compact */
                        message_display_compact?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings explicit_content_filter */
                        explicit_content_filter?: (google.protobuf.IUInt32Value|null);

                        /** TextAndImagesSettings view_nsfw_guilds */
                        view_nsfw_guilds?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings convert_emoticons */
                        convert_emoticons?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings expression_suggestions_enabled */
                        expression_suggestions_enabled?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings view_nsfw_commands */
                        view_nsfw_commands?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings use_legacy_chat_input */
                        use_legacy_chat_input?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a TextAndImagesSettings. */
                    class TextAndImagesSettings implements ITextAndImagesSettings {

                        /**
                         * Constructs a new TextAndImagesSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ITextAndImagesSettings);

                        /** TextAndImagesSettings diversity_surrogate. */
                        public diversity_surrogate?: (google.protobuf.IStringValue|null);

                        /** TextAndImagesSettings use_rich_chat_input. */
                        public use_rich_chat_input?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings use_thread_sidebar. */
                        public use_thread_sidebar?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings render_spoilers. */
                        public render_spoilers?: (google.protobuf.IStringValue|null);

                        /** TextAndImagesSettings emoji_picker_collapsed_sections. */
                        public emoji_picker_collapsed_sections: string[];

                        /** TextAndImagesSettings sticker_picker_collapsed_sections. */
                        public sticker_picker_collapsed_sections: string[];

                        /** TextAndImagesSettings view_image_descriptions. */
                        public view_image_descriptions?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings show_command_suggestions. */
                        public show_command_suggestions?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings inline_attachment_media. */
                        public inline_attachment_media?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings inline_embed_media. */
                        public inline_embed_media?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings gif_auto_play. */
                        public gif_auto_play?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings render_embeds. */
                        public render_embeds?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings render_reactions. */
                        public render_reactions?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings animate_emoji. */
                        public animate_emoji?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings animate_stickers. */
                        public animate_stickers?: (google.protobuf.IUInt32Value|null);

                        /** TextAndImagesSettings enable_tts_command. */
                        public enable_tts_command?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings message_display_compact. */
                        public message_display_compact?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings explicit_content_filter. */
                        public explicit_content_filter?: (google.protobuf.IUInt32Value|null);

                        /** TextAndImagesSettings view_nsfw_guilds. */
                        public view_nsfw_guilds?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings convert_emoticons. */
                        public convert_emoticons?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings expression_suggestions_enabled. */
                        public expression_suggestions_enabled?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings view_nsfw_commands. */
                        public view_nsfw_commands?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings use_legacy_chat_input. */
                        public use_legacy_chat_input?: (google.protobuf.IBoolValue|null);

                        /** TextAndImagesSettings _diversity_surrogate. */
                        public _diversity_surrogate?: "diversity_surrogate";

                        /** TextAndImagesSettings _use_rich_chat_input. */
                        public _use_rich_chat_input?: "use_rich_chat_input";

                        /** TextAndImagesSettings _use_thread_sidebar. */
                        public _use_thread_sidebar?: "use_thread_sidebar";

                        /** TextAndImagesSettings _render_spoilers. */
                        public _render_spoilers?: "render_spoilers";

                        /** TextAndImagesSettings _view_image_descriptions. */
                        public _view_image_descriptions?: "view_image_descriptions";

                        /** TextAndImagesSettings _show_command_suggestions. */
                        public _show_command_suggestions?: "show_command_suggestions";

                        /** TextAndImagesSettings _inline_attachment_media. */
                        public _inline_attachment_media?: "inline_attachment_media";

                        /** TextAndImagesSettings _inline_embed_media. */
                        public _inline_embed_media?: "inline_embed_media";

                        /** TextAndImagesSettings _gif_auto_play. */
                        public _gif_auto_play?: "gif_auto_play";

                        /** TextAndImagesSettings _render_embeds. */
                        public _render_embeds?: "render_embeds";

                        /** TextAndImagesSettings _render_reactions. */
                        public _render_reactions?: "render_reactions";

                        /** TextAndImagesSettings _animate_emoji. */
                        public _animate_emoji?: "animate_emoji";

                        /** TextAndImagesSettings _animate_stickers. */
                        public _animate_stickers?: "animate_stickers";

                        /** TextAndImagesSettings _enable_tts_command. */
                        public _enable_tts_command?: "enable_tts_command";

                        /** TextAndImagesSettings _message_display_compact. */
                        public _message_display_compact?: "message_display_compact";

                        /** TextAndImagesSettings _explicit_content_filter. */
                        public _explicit_content_filter?: "explicit_content_filter";

                        /** TextAndImagesSettings _view_nsfw_guilds. */
                        public _view_nsfw_guilds?: "view_nsfw_guilds";

                        /** TextAndImagesSettings _convert_emoticons. */
                        public _convert_emoticons?: "convert_emoticons";

                        /** TextAndImagesSettings _expression_suggestions_enabled. */
                        public _expression_suggestions_enabled?: "expression_suggestions_enabled";

                        /** TextAndImagesSettings _view_nsfw_commands. */
                        public _view_nsfw_commands?: "view_nsfw_commands";

                        /** TextAndImagesSettings _use_legacy_chat_input. */
                        public _use_legacy_chat_input?: "use_legacy_chat_input";

                        /**
                         * Creates a new TextAndImagesSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextAndImagesSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ITextAndImagesSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings;

                        /**
                         * Encodes the specified TextAndImagesSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings.verify|verify} messages.
                         * @param message TextAndImagesSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ITextAndImagesSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextAndImagesSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings.verify|verify} messages.
                         * @param message TextAndImagesSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ITextAndImagesSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextAndImagesSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextAndImagesSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings;

                        /**
                         * Decodes a TextAndImagesSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextAndImagesSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings;

                        /**
                         * Verifies a TextAndImagesSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextAndImagesSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextAndImagesSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings;

                        /**
                         * Creates a plain object from a TextAndImagesSettings message. Also converts values to other types if specified.
                         * @param message TextAndImagesSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.TextAndImagesSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextAndImagesSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextAndImagesSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NotificationSettings. */
                    interface INotificationSettings {

                        /** NotificationSettings show_in_app_notifications */
                        show_in_app_notifications?: (google.protobuf.IBoolValue|null);

                        /** NotificationSettings notify_friends_on_go_live */
                        notify_friends_on_go_live?: (google.protobuf.IBoolValue|null);

                        /** NotificationSettings notification_center_acked_before_id */
                        notification_center_acked_before_id?: (number|Long|null);
                    }

                    /** Represents a NotificationSettings. */
                    class NotificationSettings implements INotificationSettings {

                        /**
                         * Constructs a new NotificationSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.INotificationSettings);

                        /** NotificationSettings show_in_app_notifications. */
                        public show_in_app_notifications?: (google.protobuf.IBoolValue|null);

                        /** NotificationSettings notify_friends_on_go_live. */
                        public notify_friends_on_go_live?: (google.protobuf.IBoolValue|null);

                        /** NotificationSettings notification_center_acked_before_id. */
                        public notification_center_acked_before_id: (number|Long);

                        /** NotificationSettings _show_in_app_notifications. */
                        public _show_in_app_notifications?: "show_in_app_notifications";

                        /** NotificationSettings _notify_friends_on_go_live. */
                        public _notify_friends_on_go_live?: "notify_friends_on_go_live";

                        /**
                         * Creates a new NotificationSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NotificationSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.INotificationSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings;

                        /**
                         * Encodes the specified NotificationSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings.verify|verify} messages.
                         * @param message NotificationSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.INotificationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NotificationSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings.verify|verify} messages.
                         * @param message NotificationSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.INotificationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NotificationSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NotificationSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings;

                        /**
                         * Decodes a NotificationSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NotificationSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings;

                        /**
                         * Verifies a NotificationSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NotificationSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NotificationSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings;

                        /**
                         * Creates a plain object from a NotificationSettings message. Also converts values to other types if specified.
                         * @param message NotificationSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.NotificationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NotificationSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NotificationSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** GuildActivityStatusRestrictionDefault enum. */
                    enum GuildActivityStatusRestrictionDefault {
                        OFF = 0,
                        ON_FOR_LARGE_GUILDS = 1
                    }

                    /** Properties of a PrivacySettings. */
                    interface IPrivacySettings {

                        /** PrivacySettings allow_activity_party_privacy_friends */
                        allow_activity_party_privacy_friends?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings allow_activity_party_privacy_voice_channel */
                        allow_activity_party_privacy_voice_channel?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings restricted_guild_ids */
                        restricted_guild_ids?: ((number|Long)[]|null);

                        /** PrivacySettings default_guilds_restricted */
                        default_guilds_restricted?: (boolean|null);

                        /** PrivacySettings allow_accessibility_detection */
                        allow_accessibility_detection?: (boolean|null);

                        /** PrivacySettings detect_platform_accounts */
                        detect_platform_accounts?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings passwordless */
                        passwordless?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings contact_sync_enabled */
                        contact_sync_enabled?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings friend_source_flags */
                        friend_source_flags?: (google.protobuf.IUInt32Value|null);

                        /** PrivacySettings friend_discovery_flags */
                        friend_discovery_flags?: (google.protobuf.IUInt32Value|null);

                        /** PrivacySettings activity_restricted_guild_ids */
                        activity_restricted_guild_ids?: ((number|Long)[]|null);

                        /** PrivacySettings default_guilds_activity_restricted */
                        default_guilds_activity_restricted?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildActivityStatusRestrictionDefault|null);

                        /** PrivacySettings activity_joining_restricted_guild_ids */
                        activity_joining_restricted_guild_ids?: ((number|Long)[]|null);

                        /** PrivacySettings message_request_restricted_guild_ids */
                        message_request_restricted_guild_ids?: ((number|Long)[]|null);

                        /** PrivacySettings default_message_request_restricted */
                        default_message_request_restricted?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings drops_opted_out */
                        drops_opted_out?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings non_spam_retraining_opt_in */
                        non_spam_retraining_opt_in?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a PrivacySettings. */
                    class PrivacySettings implements IPrivacySettings {

                        /**
                         * Constructs a new PrivacySettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IPrivacySettings);

                        /** PrivacySettings allow_activity_party_privacy_friends. */
                        public allow_activity_party_privacy_friends?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings allow_activity_party_privacy_voice_channel. */
                        public allow_activity_party_privacy_voice_channel?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings restricted_guild_ids. */
                        public restricted_guild_ids: (number|Long)[];

                        /** PrivacySettings default_guilds_restricted. */
                        public default_guilds_restricted: boolean;

                        /** PrivacySettings allow_accessibility_detection. */
                        public allow_accessibility_detection: boolean;

                        /** PrivacySettings detect_platform_accounts. */
                        public detect_platform_accounts?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings passwordless. */
                        public passwordless?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings contact_sync_enabled. */
                        public contact_sync_enabled?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings friend_source_flags. */
                        public friend_source_flags?: (google.protobuf.IUInt32Value|null);

                        /** PrivacySettings friend_discovery_flags. */
                        public friend_discovery_flags?: (google.protobuf.IUInt32Value|null);

                        /** PrivacySettings activity_restricted_guild_ids. */
                        public activity_restricted_guild_ids: (number|Long)[];

                        /** PrivacySettings default_guilds_activity_restricted. */
                        public default_guilds_activity_restricted: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildActivityStatusRestrictionDefault;

                        /** PrivacySettings activity_joining_restricted_guild_ids. */
                        public activity_joining_restricted_guild_ids: (number|Long)[];

                        /** PrivacySettings message_request_restricted_guild_ids. */
                        public message_request_restricted_guild_ids: (number|Long)[];

                        /** PrivacySettings default_message_request_restricted. */
                        public default_message_request_restricted?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings drops_opted_out. */
                        public drops_opted_out?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings non_spam_retraining_opt_in. */
                        public non_spam_retraining_opt_in?: (google.protobuf.IBoolValue|null);

                        /** PrivacySettings _allow_activity_party_privacy_friends. */
                        public _allow_activity_party_privacy_friends?: "allow_activity_party_privacy_friends";

                        /** PrivacySettings _allow_activity_party_privacy_voice_channel. */
                        public _allow_activity_party_privacy_voice_channel?: "allow_activity_party_privacy_voice_channel";

                        /** PrivacySettings _detect_platform_accounts. */
                        public _detect_platform_accounts?: "detect_platform_accounts";

                        /** PrivacySettings _passwordless. */
                        public _passwordless?: "passwordless";

                        /** PrivacySettings _contact_sync_enabled. */
                        public _contact_sync_enabled?: "contact_sync_enabled";

                        /** PrivacySettings _friend_source_flags. */
                        public _friend_source_flags?: "friend_source_flags";

                        /** PrivacySettings _friend_discovery_flags. */
                        public _friend_discovery_flags?: "friend_discovery_flags";

                        /** PrivacySettings _default_message_request_restricted. */
                        public _default_message_request_restricted?: "default_message_request_restricted";

                        /** PrivacySettings _drops_opted_out. */
                        public _drops_opted_out?: "drops_opted_out";

                        /** PrivacySettings _non_spam_retraining_opt_in. */
                        public _non_spam_retraining_opt_in?: "non_spam_retraining_opt_in";

                        /**
                         * Creates a new PrivacySettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PrivacySettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IPrivacySettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings;

                        /**
                         * Encodes the specified PrivacySettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings.verify|verify} messages.
                         * @param message PrivacySettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IPrivacySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PrivacySettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings.verify|verify} messages.
                         * @param message PrivacySettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IPrivacySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PrivacySettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PrivacySettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings;

                        /**
                         * Decodes a PrivacySettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PrivacySettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings;

                        /**
                         * Verifies a PrivacySettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PrivacySettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PrivacySettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings;

                        /**
                         * Creates a plain object from a PrivacySettings message. Also converts values to other types if specified.
                         * @param message PrivacySettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.PrivacySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PrivacySettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PrivacySettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DebugSettings. */
                    interface IDebugSettings {

                        /** DebugSettings rtc_panel_show_voice_states */
                        rtc_panel_show_voice_states?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a DebugSettings. */
                    class DebugSettings implements IDebugSettings {

                        /**
                         * Constructs a new DebugSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IDebugSettings);

                        /** DebugSettings rtc_panel_show_voice_states. */
                        public rtc_panel_show_voice_states?: (google.protobuf.IBoolValue|null);

                        /** DebugSettings _rtc_panel_show_voice_states. */
                        public _rtc_panel_show_voice_states?: "rtc_panel_show_voice_states";

                        /**
                         * Creates a new DebugSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DebugSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IDebugSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings;

                        /**
                         * Encodes the specified DebugSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings.verify|verify} messages.
                         * @param message DebugSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IDebugSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DebugSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings.verify|verify} messages.
                         * @param message DebugSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IDebugSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DebugSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DebugSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings;

                        /**
                         * Decodes a DebugSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DebugSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings;

                        /**
                         * Verifies a DebugSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DebugSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DebugSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings;

                        /**
                         * Creates a plain object from a DebugSettings message. Also converts values to other types if specified.
                         * @param message DebugSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.DebugSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DebugSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DebugSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GameLibrarySettings. */
                    interface IGameLibrarySettings {

                        /** GameLibrarySettings install_shortcut_desktop */
                        install_shortcut_desktop?: (google.protobuf.IBoolValue|null);

                        /** GameLibrarySettings install_shortcut_start_menu */
                        install_shortcut_start_menu?: (google.protobuf.IBoolValue|null);

                        /** GameLibrarySettings disable_games_tab */
                        disable_games_tab?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a GameLibrarySettings. */
                    class GameLibrarySettings implements IGameLibrarySettings {

                        /**
                         * Constructs a new GameLibrarySettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGameLibrarySettings);

                        /** GameLibrarySettings install_shortcut_desktop. */
                        public install_shortcut_desktop?: (google.protobuf.IBoolValue|null);

                        /** GameLibrarySettings install_shortcut_start_menu. */
                        public install_shortcut_start_menu?: (google.protobuf.IBoolValue|null);

                        /** GameLibrarySettings disable_games_tab. */
                        public disable_games_tab?: (google.protobuf.IBoolValue|null);

                        /** GameLibrarySettings _install_shortcut_desktop. */
                        public _install_shortcut_desktop?: "install_shortcut_desktop";

                        /** GameLibrarySettings _install_shortcut_start_menu. */
                        public _install_shortcut_start_menu?: "install_shortcut_start_menu";

                        /** GameLibrarySettings _disable_games_tab. */
                        public _disable_games_tab?: "disable_games_tab";

                        /**
                         * Creates a new GameLibrarySettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GameLibrarySettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGameLibrarySettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings;

                        /**
                         * Encodes the specified GameLibrarySettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings.verify|verify} messages.
                         * @param message GameLibrarySettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGameLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GameLibrarySettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings.verify|verify} messages.
                         * @param message GameLibrarySettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGameLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GameLibrarySettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GameLibrarySettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings;

                        /**
                         * Decodes a GameLibrarySettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GameLibrarySettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings;

                        /**
                         * Verifies a GameLibrarySettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GameLibrarySettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GameLibrarySettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings;

                        /**
                         * Creates a plain object from a GameLibrarySettings message. Also converts values to other types if specified.
                         * @param message GameLibrarySettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GameLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GameLibrarySettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GameLibrarySettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CustomStatus. */
                    interface ICustomStatus {

                        /** CustomStatus text */
                        text?: (string|null);

                        /** CustomStatus emoji_id */
                        emoji_id?: (number|Long|null);

                        /** CustomStatus emoji_name */
                        emoji_name?: (string|null);

                        /** CustomStatus expires_at_ms */
                        expires_at_ms?: (number|Long|null);
                    }

                    /** Represents a CustomStatus. */
                    class CustomStatus implements ICustomStatus {

                        /**
                         * Constructs a new CustomStatus.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICustomStatus);

                        /** CustomStatus text. */
                        public text: string;

                        /** CustomStatus emoji_id. */
                        public emoji_id: (number|Long);

                        /** CustomStatus emoji_name. */
                        public emoji_name: string;

                        /** CustomStatus expires_at_ms. */
                        public expires_at_ms: (number|Long);

                        /**
                         * Creates a new CustomStatus instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CustomStatus instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICustomStatus): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus;

                        /**
                         * Encodes the specified CustomStatus message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus.verify|verify} messages.
                         * @param message CustomStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICustomStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CustomStatus message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus.verify|verify} messages.
                         * @param message CustomStatus message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICustomStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CustomStatus message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CustomStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus;

                        /**
                         * Decodes a CustomStatus message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CustomStatus
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus;

                        /**
                         * Verifies a CustomStatus message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CustomStatus message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CustomStatus
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus;

                        /**
                         * Creates a plain object from a CustomStatus message. Also converts values to other types if specified.
                         * @param message CustomStatus
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CustomStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CustomStatus to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CustomStatus
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a StatusSettings. */
                    interface IStatusSettings {

                        /** StatusSettings status */
                        status?: (google.protobuf.IStringValue|null);

                        /** StatusSettings custom_status */
                        custom_status?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICustomStatus|null);

                        /** StatusSettings show_current_game */
                        show_current_game?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a StatusSettings. */
                    class StatusSettings implements IStatusSettings {

                        /**
                         * Constructs a new StatusSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IStatusSettings);

                        /** StatusSettings status. */
                        public status?: (google.protobuf.IStringValue|null);

                        /** StatusSettings custom_status. */
                        public custom_status?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICustomStatus|null);

                        /** StatusSettings show_current_game. */
                        public show_current_game?: (google.protobuf.IBoolValue|null);

                        /** StatusSettings _status. */
                        public _status?: "status";

                        /** StatusSettings _custom_status. */
                        public _custom_status?: "custom_status";

                        /** StatusSettings _show_current_game. */
                        public _show_current_game?: "show_current_game";

                        /**
                         * Creates a new StatusSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StatusSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IStatusSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings;

                        /**
                         * Encodes the specified StatusSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings.verify|verify} messages.
                         * @param message StatusSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IStatusSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StatusSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings.verify|verify} messages.
                         * @param message StatusSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IStatusSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StatusSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StatusSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings;

                        /**
                         * Decodes a StatusSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StatusSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings;

                        /**
                         * Verifies a StatusSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StatusSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StatusSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings;

                        /**
                         * Creates a plain object from a StatusSettings message. Also converts values to other types if specified.
                         * @param message StatusSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.StatusSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StatusSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for StatusSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a LocalizationSettings. */
                    interface ILocalizationSettings {

                        /** LocalizationSettings locale */
                        locale?: (google.protobuf.IStringValue|null);

                        /** LocalizationSettings timezone_offset */
                        timezone_offset?: (google.protobuf.IInt32Value|null);
                    }

                    /** Represents a LocalizationSettings. */
                    class LocalizationSettings implements ILocalizationSettings {

                        /**
                         * Constructs a new LocalizationSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ILocalizationSettings);

                        /** LocalizationSettings locale. */
                        public locale?: (google.protobuf.IStringValue|null);

                        /** LocalizationSettings timezone_offset. */
                        public timezone_offset?: (google.protobuf.IInt32Value|null);

                        /** LocalizationSettings _locale. */
                        public _locale?: "locale";

                        /** LocalizationSettings _timezone_offset. */
                        public _timezone_offset?: "timezone_offset";

                        /**
                         * Creates a new LocalizationSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LocalizationSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ILocalizationSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings;

                        /**
                         * Encodes the specified LocalizationSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings.verify|verify} messages.
                         * @param message LocalizationSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ILocalizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LocalizationSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings.verify|verify} messages.
                         * @param message LocalizationSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ILocalizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LocalizationSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LocalizationSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings;

                        /**
                         * Decodes a LocalizationSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LocalizationSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings;

                        /**
                         * Verifies a LocalizationSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LocalizationSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LocalizationSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings;

                        /**
                         * Creates a plain object from a LocalizationSettings message. Also converts values to other types if specified.
                         * @param message LocalizationSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.LocalizationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LocalizationSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LocalizationSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Theme enum. */
                    enum Theme {
                        UNSET = 0,
                        DARK = 1,
                        LIGHT = 2
                    }

                    /** Properties of a ClientThemeSettings. */
                    interface IClientThemeSettings {

                        /** ClientThemeSettings primary_color */
                        primary_color?: (google.protobuf.IUInt64Value|null);

                        /** ClientThemeSettings background_gradient_preset_id */
                        background_gradient_preset_id?: (google.protobuf.IUInt32Value|null);

                        /** ClientThemeSettings background_gradient_angle */
                        background_gradient_angle?: (google.protobuf.IFloatValue|null);
                    }

                    /** Represents a ClientThemeSettings. */
                    class ClientThemeSettings implements IClientThemeSettings {

                        /**
                         * Constructs a new ClientThemeSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IClientThemeSettings);

                        /** ClientThemeSettings primary_color. */
                        public primary_color?: (google.protobuf.IUInt64Value|null);

                        /** ClientThemeSettings background_gradient_preset_id. */
                        public background_gradient_preset_id?: (google.protobuf.IUInt32Value|null);

                        /** ClientThemeSettings background_gradient_angle. */
                        public background_gradient_angle?: (google.protobuf.IFloatValue|null);

                        /** ClientThemeSettings _primary_color. */
                        public _primary_color?: "primary_color";

                        /** ClientThemeSettings _background_gradient_preset_id. */
                        public _background_gradient_preset_id?: "background_gradient_preset_id";

                        /** ClientThemeSettings _background_gradient_angle. */
                        public _background_gradient_angle?: "background_gradient_angle";

                        /**
                         * Creates a new ClientThemeSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClientThemeSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IClientThemeSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings;

                        /**
                         * Encodes the specified ClientThemeSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings.verify|verify} messages.
                         * @param message ClientThemeSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IClientThemeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClientThemeSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings.verify|verify} messages.
                         * @param message ClientThemeSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IClientThemeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClientThemeSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClientThemeSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings;

                        /**
                         * Decodes a ClientThemeSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClientThemeSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings;

                        /**
                         * Verifies a ClientThemeSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClientThemeSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClientThemeSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings;

                        /**
                         * Creates a plain object from a ClientThemeSettings message. Also converts values to other types if specified.
                         * @param message ClientThemeSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ClientThemeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClientThemeSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClientThemeSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AppearanceSettings. */
                    interface IAppearanceSettings {

                        /** AppearanceSettings theme */
                        theme?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Theme|null);

                        /** AppearanceSettings developer_mode */
                        developer_mode?: (boolean|null);

                        /** AppearanceSettings client_theme_settings */
                        client_theme_settings?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IClientThemeSettings|null);

                        /** AppearanceSettings mobile_redesign_disabled */
                        mobile_redesign_disabled?: (boolean|null);
                    }

                    /** Represents an AppearanceSettings. */
                    class AppearanceSettings implements IAppearanceSettings {

                        /**
                         * Constructs a new AppearanceSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAppearanceSettings);

                        /** AppearanceSettings theme. */
                        public theme: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Theme;

                        /** AppearanceSettings developer_mode. */
                        public developer_mode: boolean;

                        /** AppearanceSettings client_theme_settings. */
                        public client_theme_settings?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IClientThemeSettings|null);

                        /** AppearanceSettings mobile_redesign_disabled. */
                        public mobile_redesign_disabled: boolean;

                        /** AppearanceSettings _client_theme_settings. */
                        public _client_theme_settings?: "client_theme_settings";

                        /**
                         * Creates a new AppearanceSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AppearanceSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAppearanceSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings;

                        /**
                         * Encodes the specified AppearanceSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings.verify|verify} messages.
                         * @param message AppearanceSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAppearanceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AppearanceSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings.verify|verify} messages.
                         * @param message AppearanceSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAppearanceSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AppearanceSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AppearanceSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings;

                        /**
                         * Decodes an AppearanceSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AppearanceSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings;

                        /**
                         * Verifies an AppearanceSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AppearanceSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AppearanceSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings;

                        /**
                         * Creates a plain object from an AppearanceSettings message. Also converts values to other types if specified.
                         * @param message AppearanceSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AppearanceSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AppearanceSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AppearanceSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GuildFolder. */
                    interface IGuildFolder {

                        /** GuildFolder guild_ids */
                        guild_ids?: ((number|Long)[]|null);

                        /** GuildFolder id */
                        id?: (google.protobuf.IInt64Value|null);

                        /** GuildFolder name */
                        name?: (google.protobuf.IStringValue|null);

                        /** GuildFolder color */
                        color?: (google.protobuf.IUInt64Value|null);
                    }

                    /** Represents a GuildFolder. */
                    class GuildFolder implements IGuildFolder {

                        /**
                         * Constructs a new GuildFolder.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolder);

                        /** GuildFolder guild_ids. */
                        public guild_ids: (number|Long)[];

                        /** GuildFolder id. */
                        public id?: (google.protobuf.IInt64Value|null);

                        /** GuildFolder name. */
                        public name?: (google.protobuf.IStringValue|null);

                        /** GuildFolder color. */
                        public color?: (google.protobuf.IUInt64Value|null);

                        /** GuildFolder _id. */
                        public _id?: "id";

                        /** GuildFolder _name. */
                        public _name?: "name";

                        /** GuildFolder _color. */
                        public _color?: "color";

                        /**
                         * Creates a new GuildFolder instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GuildFolder instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolder): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder;

                        /**
                         * Encodes the specified GuildFolder message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder.verify|verify} messages.
                         * @param message GuildFolder message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolder, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GuildFolder message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder.verify|verify} messages.
                         * @param message GuildFolder message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolder, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GuildFolder message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GuildFolder
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder;

                        /**
                         * Decodes a GuildFolder message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GuildFolder
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder;

                        /**
                         * Verifies a GuildFolder message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GuildFolder message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GuildFolder
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder;

                        /**
                         * Creates a plain object from a GuildFolder message. Also converts values to other types if specified.
                         * @param message GuildFolder
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolder, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GuildFolder to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GuildFolder
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GuildFolders. */
                    interface IGuildFolders {

                        /** GuildFolders folders */
                        folders?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolder[]|null);

                        /** GuildFolders guild_positions */
                        guild_positions?: ((number|Long)[]|null);
                    }

                    /** Represents a GuildFolders. */
                    class GuildFolders implements IGuildFolders {

                        /**
                         * Constructs a new GuildFolders.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolders);

                        /** GuildFolders folders. */
                        public folders: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolder[];

                        /** GuildFolders guild_positions. */
                        public guild_positions: (number|Long)[];

                        /**
                         * Creates a new GuildFolders instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GuildFolders instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolders): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders;

                        /**
                         * Encodes the specified GuildFolders message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders.verify|verify} messages.
                         * @param message GuildFolders message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolders, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GuildFolders message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders.verify|verify} messages.
                         * @param message GuildFolders message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IGuildFolders, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GuildFolders message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GuildFolders
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders;

                        /**
                         * Decodes a GuildFolders message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GuildFolders
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders;

                        /**
                         * Verifies a GuildFolders message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GuildFolders message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GuildFolders
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders;

                        /**
                         * Creates a plain object from a GuildFolders message. Also converts values to other types if specified.
                         * @param message GuildFolders
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.GuildFolders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GuildFolders to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GuildFolders
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** FavoriteChannelType enum. */
                    enum FavoriteChannelType {
                        UNSET_FAVORITE_CHANNEL_TYPE = 0,
                        REFERENCE_ORIGINAL = 1,
                        CATEGORY = 2
                    }

                    /** Properties of a FavoriteChannel. */
                    interface IFavoriteChannel {

                        /** FavoriteChannel nickname */
                        nickname?: (string|null);

                        /** FavoriteChannel type */
                        type?: (discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannelType|null);

                        /** FavoriteChannel position */
                        position?: (number|null);

                        /** FavoriteChannel parent_id */
                        parent_id?: (number|Long|null);
                    }

                    /** Represents a FavoriteChannel. */
                    class FavoriteChannel implements IFavoriteChannel {

                        /**
                         * Constructs a new FavoriteChannel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavoriteChannel);

                        /** FavoriteChannel nickname. */
                        public nickname: string;

                        /** FavoriteChannel type. */
                        public type: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannelType;

                        /** FavoriteChannel position. */
                        public position: number;

                        /** FavoriteChannel parent_id. */
                        public parent_id: (number|Long);

                        /**
                         * Creates a new FavoriteChannel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FavoriteChannel instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavoriteChannel): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel;

                        /**
                         * Encodes the specified FavoriteChannel message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel.verify|verify} messages.
                         * @param message FavoriteChannel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavoriteChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FavoriteChannel message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel.verify|verify} messages.
                         * @param message FavoriteChannel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavoriteChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FavoriteChannel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FavoriteChannel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel;

                        /**
                         * Decodes a FavoriteChannel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FavoriteChannel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel;

                        /**
                         * Verifies a FavoriteChannel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FavoriteChannel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FavoriteChannel
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel;

                        /**
                         * Creates a plain object from a FavoriteChannel message. Also converts values to other types if specified.
                         * @param message FavoriteChannel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.FavoriteChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FavoriteChannel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FavoriteChannel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Favorites. */
                    interface IFavorites {

                        /** Favorites favorite_channels */
                        favorite_channels?: ({ [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavoriteChannel }|null);

                        /** Favorites muted */
                        muted?: (boolean|null);
                    }

                    /** Represents a Favorites. */
                    class Favorites implements IFavorites {

                        /**
                         * Constructs a new Favorites.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavorites);

                        /** Favorites favorite_channels. */
                        public favorite_channels: { [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavoriteChannel };

                        /** Favorites muted. */
                        public muted: boolean;

                        /**
                         * Creates a new Favorites instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Favorites instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavorites): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites;

                        /**
                         * Encodes the specified Favorites message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites.verify|verify} messages.
                         * @param message Favorites message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavorites, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Favorites message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites.verify|verify} messages.
                         * @param message Favorites message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IFavorites, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Favorites message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Favorites
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites;

                        /**
                         * Decodes a Favorites message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Favorites
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites;

                        /**
                         * Verifies a Favorites message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Favorites message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Favorites
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites;

                        /**
                         * Creates a plain object from a Favorites message. Also converts values to other types if specified.
                         * @param message Favorites
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.Favorites, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Favorites to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Favorites
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AudioContextSetting. */
                    interface IAudioContextSetting {

                        /** AudioContextSetting muted */
                        muted?: (boolean|null);

                        /** AudioContextSetting volume */
                        volume?: (number|null);

                        /** AudioContextSetting modified_at */
                        modified_at?: (number|Long|null);
                    }

                    /** Represents an AudioContextSetting. */
                    class AudioContextSetting implements IAudioContextSetting {

                        /**
                         * Constructs a new AudioContextSetting.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting);

                        /** AudioContextSetting muted. */
                        public muted: boolean;

                        /** AudioContextSetting volume. */
                        public volume: number;

                        /** AudioContextSetting modified_at. */
                        public modified_at: (number|Long);

                        /**
                         * Creates a new AudioContextSetting instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioContextSetting instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting;

                        /**
                         * Encodes the specified AudioContextSetting message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting.verify|verify} messages.
                         * @param message AudioContextSetting message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioContextSetting message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting.verify|verify} messages.
                         * @param message AudioContextSetting message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioContextSetting message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioContextSetting
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting;

                        /**
                         * Decodes an AudioContextSetting message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioContextSetting
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting;

                        /**
                         * Verifies an AudioContextSetting message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioContextSetting message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioContextSetting
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting;

                        /**
                         * Creates a plain object from an AudioContextSetting message. Also converts values to other types if specified.
                         * @param message AudioContextSetting
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioContextSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioContextSetting to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AudioContextSetting
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AudioSettings. */
                    interface IAudioSettings {

                        /** AudioSettings user */
                        user?: ({ [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting }|null);

                        /** AudioSettings stream */
                        stream?: ({ [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting }|null);
                    }

                    /** Represents an AudioSettings. */
                    class AudioSettings implements IAudioSettings {

                        /**
                         * Constructs a new AudioSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioSettings);

                        /** AudioSettings user. */
                        public user: { [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting };

                        /** AudioSettings stream. */
                        public stream: { [k: string]: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioContextSetting };

                        /**
                         * Creates a new AudioSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings;

                        /**
                         * Encodes the specified AudioSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings.verify|verify} messages.
                         * @param message AudioSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings.verify|verify} messages.
                         * @param message AudioSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.IAudioSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings;

                        /**
                         * Decodes an AudioSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings;

                        /**
                         * Verifies an AudioSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings;

                        /**
                         * Creates a plain object from an AudioSettings message. Also converts values to other types if specified.
                         * @param message AudioSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.AudioSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AudioSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CommunitiesSettings. */
                    interface ICommunitiesSettings {

                        /** CommunitiesSettings disable_home_auto_nav */
                        disable_home_auto_nav?: (google.protobuf.IBoolValue|null);
                    }

                    /** Represents a CommunitiesSettings. */
                    class CommunitiesSettings implements ICommunitiesSettings {

                        /**
                         * Constructs a new CommunitiesSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICommunitiesSettings);

                        /** CommunitiesSettings disable_home_auto_nav. */
                        public disable_home_auto_nav?: (google.protobuf.IBoolValue|null);

                        /** CommunitiesSettings _disable_home_auto_nav. */
                        public _disable_home_auto_nav?: "disable_home_auto_nav";

                        /**
                         * Creates a new CommunitiesSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunitiesSettings instance
                         */
                        public static create(properties?: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICommunitiesSettings): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings;

                        /**
                         * Encodes the specified CommunitiesSettings message. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings.verify|verify} messages.
                         * @param message CommunitiesSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICommunitiesSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CommunitiesSettings message, length delimited. Does not implicitly {@link discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings.verify|verify} messages.
                         * @param message CommunitiesSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.ICommunitiesSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunitiesSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunitiesSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings;

                        /**
                         * Decodes a CommunitiesSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CommunitiesSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings;

                        /**
                         * Verifies a CommunitiesSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CommunitiesSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunitiesSettings
                         */
                        public static fromObject(object: { [k: string]: any }): discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings;

                        /**
                         * Creates a plain object from a CommunitiesSettings message. Also converts values to other types if specified.
                         * @param message CommunitiesSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: discord_protos.discord_users.v1.PreloadedUserSettings.PreloadedUserSettings.CommunitiesSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunitiesSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CommunitiesSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
