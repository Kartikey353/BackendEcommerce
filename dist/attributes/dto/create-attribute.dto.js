"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeValueDto = exports.CreateAttributeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const attribute_entity_1 = require("../entities/attribute.entity");
class CreateAttributeDto extends (0, swagger_1.PickType)(attribute_entity_1.Attribute, [
    'name',
    'shop_id',
    'language',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { values: { required: true, type: () => [require("./create-attribute.dto").AttributeValueDto] } };
    }
}
exports.CreateAttributeDto = CreateAttributeDto;
class AttributeValueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, value: { required: true, type: () => String }, meta: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.AttributeValueDto = AttributeValueDto;
//# sourceMappingURL=create-attribute.dto.js.map