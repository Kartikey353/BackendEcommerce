"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeValue = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class AttributeValue extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { shop_id: { required: true, type: () => Number }, value: { required: true, type: () => String }, meta: { required: false, type: () => String }, attribute: { required: true, type: () => require("./attribute.entity").Attribute } };
    }
}
exports.AttributeValue = AttributeValue;
//# sourceMappingURL=attribute-value.entity.js.map