"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryWiseProduct = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class CategoryWiseProduct extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { totalRevenue: { required: false, type: () => Number }, category_name: { required: false, type: () => String }, shop_name: { required: false, type: () => String }, product_count: { required: false, type: () => Number } };
    }
}
exports.CategoryWiseProduct = CategoryWiseProduct;
//# sourceMappingURL=category-wise-product.entity.js.map