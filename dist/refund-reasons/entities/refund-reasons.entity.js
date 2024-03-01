"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundReason = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class RefundReason extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, slug: { required: true, type: () => String }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] }, deleted_at: { required: false, type: () => String } };
    }
}
exports.RefundReason = RefundReason;
//# sourceMappingURL=refund-reasons.entity.js.map