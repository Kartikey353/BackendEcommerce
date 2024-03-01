"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashSale = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class FlashSale extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, slug: { required: true, type: () => String }, description: { required: true, type: () => String }, start_date: { required: true, type: () => String }, end_date: { required: true, type: () => String }, image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, cover_image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, type: { required: true, type: () => String }, rate: { required: true, type: () => String }, sale_status: { required: true, type: () => Boolean }, sale_builder: { required: true, type: () => Object }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] }, deleted_at: { required: false, type: () => String } };
    }
}
exports.FlashSale = FlashSale;
//# sourceMappingURL=flash-sale.entity.js.map