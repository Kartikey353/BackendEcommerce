"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Attribute extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, shop_id: { required: true, type: () => String }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, slug: { required: true, type: () => String }, values: { required: true, type: () => [require("./attribute-value.entity").AttributeValue] }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=attribute.entity.js.map