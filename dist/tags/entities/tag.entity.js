"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Tag extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, slug: { required: true, type: () => String }, parent: { required: true, type: () => Number }, details: { required: true, type: () => String }, image: { required: true, type: () => require("../../common/entities/attachment.entity").Attachment }, icon: { required: true, type: () => String }, type: { required: true, type: () => require("../../types/entities/type.entity").Type }, products: { required: true, type: () => [require("../../products/entities/product.entity").Product] }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Tag = Tag;
//# sourceMappingURL=tag.entity.js.map