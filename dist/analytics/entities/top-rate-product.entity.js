"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopRateProduct = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class TopRateProduct extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, slug: { required: false, type: () => String }, regular_price: { required: false, type: () => Number }, sale_price: { required: false, type: () => Number }, min_price: { required: false, type: () => Number }, max_price: { required: false, type: () => Number }, product_type: { required: false, type: () => String }, description: { required: false, type: () => String }, type_id: { required: false, type: () => Number }, type_slug: { required: false, type: () => String }, total_rating: { required: false, type: () => Number }, rating_count: { required: false, type: () => Number }, actual_rating: { required: false, type: () => Number }, image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment } };
    }
}
exports.TopRateProduct = TopRateProduct;
//# sourceMappingURL=top-rate-product.entity.js.map