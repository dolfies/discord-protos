// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "PremiumMarketingComponentProperties.proto" (package "discord_protos.premium_marketing.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties
 */
export interface PremiumMarketingComponentProperties {
    /**
     * @generated from protobuf field: string placeholder = 1;
     */
    placeholder: string;
    /**
     * @generated from protobuf field: discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties announcement_modal_variant_1 = 2;
     */
    announcementModalVariant1?: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties;
    /**
     * @generated from protobuf field: string content_identifier = 3;
     */
    contentIdentifier: string;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard
 */
export interface PremiumMarketingComponentProperties_FeatureCard {
    /**
     * @generated from protobuf field: string header = 1;
     */
    header: string;
    /**
     * @generated from protobuf field: string pill = 2;
     */
    pill: string;
    /**
     * @generated from protobuf field: string body = 3;
     */
    body: string;
    /**
     * @generated from protobuf field: string image_link = 4;
     */
    imageLink: string;
    /**
     * @generated from protobuf field: string image_link_light_theme = 5;
     */
    imageLinkLightTheme: string;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton
 */
export interface PremiumMarketingComponentProperties_SubscriptionButton {
    /**
     * @generated from protobuf field: string copy = 1;
     */
    copy: string;
    /**
     * @generated from protobuf field: discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction button_action = 2;
     */
    buttonAction: PremiumMarketingComponentProperties_ButtonAction;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle
 */
export interface PremiumMarketingComponentProperties_Subtitle {
    /**
     * @generated from protobuf field: string link = 1;
     */
    link: string;
    /**
     * @generated from protobuf field: string locale = 2;
     */
    locale: string;
    /**
     * @generated from protobuf field: bool is_default = 3;
     */
    isDefault: boolean;
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage
 */
export interface PremiumMarketingComponentProperties_Variant1Storage {
    /**
     * @generated from protobuf field: map<string, string> hero_art_localized_video_links_dark_theme = 1;
     */
    heroArtLocalizedVideoLinksDarkTheme: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, string> hero_art_localized_video_links_light_theme = 2;
     */
    heroArtLocalizedVideoLinksLightTheme: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: map<string, string> hero_art_video_subtitle_links = 3;
     */
    heroArtVideoSubtitleLinks: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties
 */
export interface PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties {
    /**
     * @generated from protobuf field: string header = 1;
     */
    header: string;
    /**
     * @generated from protobuf field: string subheader = 2;
     */
    subheader: string;
    /**
     * @generated from protobuf field: string video_link = 3;
     */
    videoLink: string;
    /**
     * @generated from protobuf field: string help_article_id = 4;
     */
    helpArticleId: string;
    /**
     * @generated from protobuf field: repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard feature_cards = 5;
     */
    featureCards: PremiumMarketingComponentProperties_FeatureCard[];
    /**
     * @generated from protobuf field: optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton button = 6;
     */
    button?: PremiumMarketingComponentProperties_SubscriptionButton;
    /**
     * @generated from protobuf field: string dismiss_key = 7;
     */
    dismissKey: string;
    /**
     * @generated from protobuf field: string hero_art_video_link_light_theme = 8;
     */
    heroArtVideoLinkLightTheme: string;
    /**
     * @generated from protobuf field: string hero_art_image_link_dark_theme = 9;
     */
    heroArtImageLinkDarkTheme: string;
    /**
     * @generated from protobuf field: string hero_art_image_link_light_theme = 10;
     */
    heroArtImageLinkLightTheme: string;
    /**
     * @generated from protobuf field: string modal_top_pill = 11;
     */
    modalTopPill: string;
    /**
     * @generated from protobuf field: string body = 12;
     */
    body: string;
    /**
     * @generated from protobuf field: repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle hero_art_video_subtitles = 13;
     */
    heroArtVideoSubtitles: PremiumMarketingComponentProperties_Subtitle[];
    /**
     * @generated from protobuf field: optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage storage = 14;
     */
    storage?: PremiumMarketingComponentProperties_Variant1Storage;
}
/**
 * @generated from protobuf enum discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction
 */
export enum PremiumMarketingComponentProperties_ButtonAction {
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_MARKETING_PAGE = 1;
     */
    OPEN_MARKETING_PAGE = 1,
    /**
     * @generated from protobuf enum value: BUTTON_ACTION_OPEN_TIER_2_PAYMENT_MODAL = 2;
     */
    OPEN_TIER_2_PAYMENT_MODAL = 2
}
// @generated message type with reflection information, may provide speed optimized methods
class PremiumMarketingComponentProperties$Type extends MessageType<PremiumMarketingComponentProperties> {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties", [
            { no: 1, name: "placeholder", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "announcement_modal_variant_1", kind: "message", T: () => PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties },
            { no: 3, name: "content_identifier", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PremiumMarketingComponentProperties>): PremiumMarketingComponentProperties {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.placeholder = "";
        message.contentIdentifier = "";
        if (value !== undefined)
            reflectionMergePartial<PremiumMarketingComponentProperties>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties): PremiumMarketingComponentProperties {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string placeholder */ 1:
                    message.placeholder = reader.string();
                    break;
                case /* discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties announcement_modal_variant_1 */ 2:
                    message.announcementModalVariant1 = PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties.internalBinaryRead(reader, reader.uint32(), options, message.announcementModalVariant1);
                    break;
                case /* string content_identifier */ 3:
                    message.contentIdentifier = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PremiumMarketingComponentProperties, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string placeholder = 1; */
        if (message.placeholder !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.placeholder);
        /* discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties announcement_modal_variant_1 = 2; */
        if (message.announcementModalVariant1)
            PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties.internalBinaryWrite(message.announcementModalVariant1, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string content_identifier = 3; */
        if (message.contentIdentifier !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.contentIdentifier);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties
 */
export const PremiumMarketingComponentProperties = new PremiumMarketingComponentProperties$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PremiumMarketingComponentProperties_FeatureCard$Type extends MessageType<PremiumMarketingComponentProperties_FeatureCard> {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard", [
            { no: 1, name: "header", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "pill", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "image_link", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "image_link_light_theme", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PremiumMarketingComponentProperties_FeatureCard>): PremiumMarketingComponentProperties_FeatureCard {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.header = "";
        message.pill = "";
        message.body = "";
        message.imageLink = "";
        message.imageLinkLightTheme = "";
        if (value !== undefined)
            reflectionMergePartial<PremiumMarketingComponentProperties_FeatureCard>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_FeatureCard): PremiumMarketingComponentProperties_FeatureCard {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string header */ 1:
                    message.header = reader.string();
                    break;
                case /* string pill */ 2:
                    message.pill = reader.string();
                    break;
                case /* string body */ 3:
                    message.body = reader.string();
                    break;
                case /* string image_link */ 4:
                    message.imageLink = reader.string();
                    break;
                case /* string image_link_light_theme */ 5:
                    message.imageLinkLightTheme = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PremiumMarketingComponentProperties_FeatureCard, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string header = 1; */
        if (message.header !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.header);
        /* string pill = 2; */
        if (message.pill !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.pill);
        /* string body = 3; */
        if (message.body !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.body);
        /* string image_link = 4; */
        if (message.imageLink !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.imageLink);
        /* string image_link_light_theme = 5; */
        if (message.imageLinkLightTheme !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.imageLinkLightTheme);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard
 */
export const PremiumMarketingComponentProperties_FeatureCard = new PremiumMarketingComponentProperties_FeatureCard$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PremiumMarketingComponentProperties_SubscriptionButton$Type extends MessageType<PremiumMarketingComponentProperties_SubscriptionButton> {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton", [
            { no: 1, name: "copy", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "button_action", kind: "enum", T: () => ["discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction", PremiumMarketingComponentProperties_ButtonAction, "BUTTON_ACTION_"] }
        ]);
    }
    create(value?: PartialMessage<PremiumMarketingComponentProperties_SubscriptionButton>): PremiumMarketingComponentProperties_SubscriptionButton {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.copy = "";
        message.buttonAction = 0;
        if (value !== undefined)
            reflectionMergePartial<PremiumMarketingComponentProperties_SubscriptionButton>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_SubscriptionButton): PremiumMarketingComponentProperties_SubscriptionButton {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string copy */ 1:
                    message.copy = reader.string();
                    break;
                case /* discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction button_action */ 2:
                    message.buttonAction = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PremiumMarketingComponentProperties_SubscriptionButton, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string copy = 1; */
        if (message.copy !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.copy);
        /* discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.ButtonAction button_action = 2; */
        if (message.buttonAction !== 0)
            writer.tag(2, WireType.Varint).int32(message.buttonAction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton
 */
export const PremiumMarketingComponentProperties_SubscriptionButton = new PremiumMarketingComponentProperties_SubscriptionButton$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PremiumMarketingComponentProperties_Subtitle$Type extends MessageType<PremiumMarketingComponentProperties_Subtitle> {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle", [
            { no: 1, name: "link", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "locale", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "is_default", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<PremiumMarketingComponentProperties_Subtitle>): PremiumMarketingComponentProperties_Subtitle {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.link = "";
        message.locale = "";
        message.isDefault = false;
        if (value !== undefined)
            reflectionMergePartial<PremiumMarketingComponentProperties_Subtitle>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_Subtitle): PremiumMarketingComponentProperties_Subtitle {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string link */ 1:
                    message.link = reader.string();
                    break;
                case /* string locale */ 2:
                    message.locale = reader.string();
                    break;
                case /* bool is_default */ 3:
                    message.isDefault = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PremiumMarketingComponentProperties_Subtitle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string link = 1; */
        if (message.link !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.link);
        /* string locale = 2; */
        if (message.locale !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.locale);
        /* bool is_default = 3; */
        if (message.isDefault !== false)
            writer.tag(3, WireType.Varint).bool(message.isDefault);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle
 */
export const PremiumMarketingComponentProperties_Subtitle = new PremiumMarketingComponentProperties_Subtitle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PremiumMarketingComponentProperties_Variant1Storage$Type extends MessageType<PremiumMarketingComponentProperties_Variant1Storage> {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage", [
            { no: 1, name: "hero_art_localized_video_links_dark_theme", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 2, name: "hero_art_localized_video_links_light_theme", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 3, name: "hero_art_video_subtitle_links", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value?: PartialMessage<PremiumMarketingComponentProperties_Variant1Storage>): PremiumMarketingComponentProperties_Variant1Storage {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.heroArtLocalizedVideoLinksDarkTheme = {};
        message.heroArtLocalizedVideoLinksLightTheme = {};
        message.heroArtVideoSubtitleLinks = {};
        if (value !== undefined)
            reflectionMergePartial<PremiumMarketingComponentProperties_Variant1Storage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_Variant1Storage): PremiumMarketingComponentProperties_Variant1Storage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> hero_art_localized_video_links_dark_theme */ 1:
                    this.binaryReadMap1(message.heroArtLocalizedVideoLinksDarkTheme, reader, options);
                    break;
                case /* map<string, string> hero_art_localized_video_links_light_theme */ 2:
                    this.binaryReadMap2(message.heroArtLocalizedVideoLinksLightTheme, reader, options);
                    break;
                case /* map<string, string> hero_art_video_subtitle_links */ 3:
                    this.binaryReadMap3(message.heroArtVideoSubtitleLinks, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap1(map: PremiumMarketingComponentProperties_Variant1Storage["heroArtLocalizedVideoLinksDarkTheme"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PremiumMarketingComponentProperties_Variant1Storage["heroArtLocalizedVideoLinksDarkTheme"] | undefined, val: PremiumMarketingComponentProperties_Variant1Storage["heroArtLocalizedVideoLinksDarkTheme"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage.hero_art_localized_video_links_dark_theme");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    private binaryReadMap2(map: PremiumMarketingComponentProperties_Variant1Storage["heroArtLocalizedVideoLinksLightTheme"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PremiumMarketingComponentProperties_Variant1Storage["heroArtLocalizedVideoLinksLightTheme"] | undefined, val: PremiumMarketingComponentProperties_Variant1Storage["heroArtLocalizedVideoLinksLightTheme"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage.hero_art_localized_video_links_light_theme");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    private binaryReadMap3(map: PremiumMarketingComponentProperties_Variant1Storage["heroArtVideoSubtitleLinks"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PremiumMarketingComponentProperties_Variant1Storage["heroArtVideoSubtitleLinks"] | undefined, val: PremiumMarketingComponentProperties_Variant1Storage["heroArtVideoSubtitleLinks"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage.hero_art_video_subtitle_links");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message: PremiumMarketingComponentProperties_Variant1Storage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<string, string> hero_art_localized_video_links_dark_theme = 1; */
        for (let k of globalThis.Object.keys(message.heroArtLocalizedVideoLinksDarkTheme))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.heroArtLocalizedVideoLinksDarkTheme[k]).join();
        /* map<string, string> hero_art_localized_video_links_light_theme = 2; */
        for (let k of globalThis.Object.keys(message.heroArtLocalizedVideoLinksLightTheme))
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.heroArtLocalizedVideoLinksLightTheme[k]).join();
        /* map<string, string> hero_art_video_subtitle_links = 3; */
        for (let k of globalThis.Object.keys(message.heroArtVideoSubtitleLinks))
            writer.tag(3, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.heroArtVideoSubtitleLinks[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage
 */
export const PremiumMarketingComponentProperties_Variant1Storage = new PremiumMarketingComponentProperties_Variant1Storage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type extends MessageType<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties> {
    constructor() {
        super("discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties", [
            { no: 1, name: "header", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "subheader", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "video_link", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "help_article_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "feature_cards", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PremiumMarketingComponentProperties_FeatureCard },
            { no: 6, name: "button", kind: "message", T: () => PremiumMarketingComponentProperties_SubscriptionButton },
            { no: 7, name: "dismiss_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "hero_art_video_link_light_theme", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "hero_art_image_link_dark_theme", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "hero_art_image_link_light_theme", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "modal_top_pill", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "hero_art_video_subtitles", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PremiumMarketingComponentProperties_Subtitle },
            { no: 14, name: "storage", kind: "message", T: () => PremiumMarketingComponentProperties_Variant1Storage }
        ]);
    }
    create(value?: PartialMessage<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties>): PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.header = "";
        message.subheader = "";
        message.videoLink = "";
        message.helpArticleId = "";
        message.featureCards = [];
        message.dismissKey = "";
        message.heroArtVideoLinkLightTheme = "";
        message.heroArtImageLinkDarkTheme = "";
        message.heroArtImageLinkLightTheme = "";
        message.modalTopPill = "";
        message.body = "";
        message.heroArtVideoSubtitles = [];
        if (value !== undefined)
            reflectionMergePartial<PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties): PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string header */ 1:
                    message.header = reader.string();
                    break;
                case /* string subheader */ 2:
                    message.subheader = reader.string();
                    break;
                case /* string video_link */ 3:
                    message.videoLink = reader.string();
                    break;
                case /* string help_article_id */ 4:
                    message.helpArticleId = reader.string();
                    break;
                case /* repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard feature_cards */ 5:
                    message.featureCards.push(PremiumMarketingComponentProperties_FeatureCard.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton button */ 6:
                    message.button = PremiumMarketingComponentProperties_SubscriptionButton.internalBinaryRead(reader, reader.uint32(), options, message.button);
                    break;
                case /* string dismiss_key */ 7:
                    message.dismissKey = reader.string();
                    break;
                case /* string hero_art_video_link_light_theme */ 8:
                    message.heroArtVideoLinkLightTheme = reader.string();
                    break;
                case /* string hero_art_image_link_dark_theme */ 9:
                    message.heroArtImageLinkDarkTheme = reader.string();
                    break;
                case /* string hero_art_image_link_light_theme */ 10:
                    message.heroArtImageLinkLightTheme = reader.string();
                    break;
                case /* string modal_top_pill */ 11:
                    message.modalTopPill = reader.string();
                    break;
                case /* string body */ 12:
                    message.body = reader.string();
                    break;
                case /* repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle hero_art_video_subtitles */ 13:
                    message.heroArtVideoSubtitles.push(PremiumMarketingComponentProperties_Subtitle.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage storage */ 14:
                    message.storage = PremiumMarketingComponentProperties_Variant1Storage.internalBinaryRead(reader, reader.uint32(), options, message.storage);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string header = 1; */
        if (message.header !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.header);
        /* string subheader = 2; */
        if (message.subheader !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.subheader);
        /* string video_link = 3; */
        if (message.videoLink !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.videoLink);
        /* string help_article_id = 4; */
        if (message.helpArticleId !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.helpArticleId);
        /* repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.FeatureCard feature_cards = 5; */
        for (let i = 0; i < message.featureCards.length; i++)
            PremiumMarketingComponentProperties_FeatureCard.internalBinaryWrite(message.featureCards[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.SubscriptionButton button = 6; */
        if (message.button)
            PremiumMarketingComponentProperties_SubscriptionButton.internalBinaryWrite(message.button, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* string dismiss_key = 7; */
        if (message.dismissKey !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.dismissKey);
        /* string hero_art_video_link_light_theme = 8; */
        if (message.heroArtVideoLinkLightTheme !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.heroArtVideoLinkLightTheme);
        /* string hero_art_image_link_dark_theme = 9; */
        if (message.heroArtImageLinkDarkTheme !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.heroArtImageLinkDarkTheme);
        /* string hero_art_image_link_light_theme = 10; */
        if (message.heroArtImageLinkLightTheme !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.heroArtImageLinkLightTheme);
        /* string modal_top_pill = 11; */
        if (message.modalTopPill !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.modalTopPill);
        /* string body = 12; */
        if (message.body !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.body);
        /* repeated discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Subtitle hero_art_video_subtitles = 13; */
        for (let i = 0; i < message.heroArtVideoSubtitles.length; i++)
            PremiumMarketingComponentProperties_Subtitle.internalBinaryWrite(message.heroArtVideoSubtitles[i], writer.tag(13, WireType.LengthDelimited).fork(), options).join();
        /* optional discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.Variant1Storage storage = 14; */
        if (message.storage)
            PremiumMarketingComponentProperties_Variant1Storage.internalBinaryWrite(message.storage, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message discord_protos.premium_marketing.v1.PremiumMarketingComponentProperties.AnnouncementModalVariant1Properties
 */
export const PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties = new PremiumMarketingComponentProperties_AnnouncementModalVariant1Properties$Type();
