window.protoObjects = [];
Object.defineProperty(Object.prototype, "typeName", {
    configurable: true,

    set(v) {
        if (this.internalBinaryRead != null) {
            window.protoObjects.push(this);
        }

        Object.defineProperty(this, "typeName", {
            value: v,
            configurable: true,
            enumerable: true,
            writable: true
        });
    }
});
