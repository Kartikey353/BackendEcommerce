"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const product_entity_1 = require("../entities/product.entity");
class CreateProductDto extends (0, swagger_1.OmitType)(product_entity_1.Product, [
    'id',
    'slug',
    'created_at',
    'updated_at',
    'orders',
    'pivot',
    'shop',
    'categories',
    'tags',
    'type',
    'related_products',
    'min_price',
    'max_price',
    'translated_languages',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { categories: { required: true, type: () => [Number] }, tags: { required: true, type: () => [Number] } };
    }
}
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map