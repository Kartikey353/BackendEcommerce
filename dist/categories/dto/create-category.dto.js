"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const category_entity_1 = require("../entities/category.entity");
class CreateCategoryDto extends (0, swagger_1.PickType)(category_entity_1.Category, [
    'name',
    'type',
    'details',
    'parent',
    'icon',
    'image',
    'language',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateCategoryDto = CreateCategoryDto;
//# sourceMappingURL=create-category.dto.js.map