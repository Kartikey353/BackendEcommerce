"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundPolicy = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class RefundPolicy extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, slug: { required: true, type: () => String }, target: { required: true, type: () => String }, status: { required: true, type: () => String }, description: { required: false, type: () => String }, language: { required: true, type: () => String }, shop_id: { required: false, type: () => String }, shop: { required: false, type: () => require("../../shops/entities/shop.entity").Shop }, refunds: { required: false, type: () => [require("../../refunds/entities/refund.entity").Refund] }, translated_languages: { required: true, type: () => [String] }, deleted_at: { required: false, type: () => String } };
    }
}
exports.RefundPolicy = RefundPolicy;
//# sourceMappingURL=refund-policies.entity.js.map