"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Category extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, slug: { required: true, type: () => String }, parent: { required: false, type: () => require("./category.entity").Category }, children: { required: false, type: () => [require("./category.entity").Category] }, details: { required: false, type: () => String }, image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, icon: { required: false, type: () => String }, type: { required: false, type: () => require("../../types/entities/type.entity").Type }, products: { required: false, type: () => [require("../../products/entities/product.entity").Product] }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map