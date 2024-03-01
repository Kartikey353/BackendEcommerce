"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("./core.entity");
class Attachment extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { thumbnail: { required: false, type: () => String }, original: { required: false, type: () => String } };
    }
}
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.entity.js.map