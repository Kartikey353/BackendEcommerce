"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAuthorDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const author_entity_1 = require("../entities/author.entity");
class CreateAuthorDto extends (0, swagger_1.OmitType)(author_entity_1.Author, [
    'id',
    'bio',
    'born',
    'cover_image',
    'death',
    'image',
    'languages',
    'name',
    'products_count',
    'quote',
    'slug',
    'socials',
    'translated_languages',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { shop_id: { required: false, type: () => String } };
    }
}
exports.CreateAuthorDto = CreateAuthorDto;
//# sourceMappingURL=create-author.dto.js.map