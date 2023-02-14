import { MessageType } from "@protobuf-ts/runtime";

function toBase64(this: MessageType<any>, data) {
    return Buffer.from(this.toBinary(data)).toString("base64");
}

function fromBase64(this: MessageType<any>, base64: string) {
    return this.fromBinary(Buffer.from(base64, "base64"))
}

export * from "./proto/PreloadedUserSettings";
export * from "./proto/FrecencyUserSettings";

declare module "@protobuf-ts/runtime" {
	interface MessageType<T> {
		toBase64(data: T): string;
		fromBase64(base64: string): T;
	}
}

MessageType.prototype.fromBase64 = fromBase64
MessageType.prototype.toBase64 = toBase64
