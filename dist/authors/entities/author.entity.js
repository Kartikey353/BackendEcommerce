"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Author extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { bio: { required: false, type: () => String }, born: { required: false, type: () => String }, cover_image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, death: { required: false, type: () => String }, image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, is_approved: { required: false, type: () => Boolean }, languages: { required: false, type: () => String }, name: { required: true, type: () => String }, products_count: { required: false, type: () => Number }, quote: { required: false, type: () => String }, slug: { required: false, type: () => String }, socials: { required: false, type: () => require("../../settings/entities/setting.entity").ShopSocials }, language: { required: false, type: () => String }, translated_languages: { required: false, type: () => [String] } };
    }
}
exports.Author = Author;
//# sourceMappingURL=author.entity.js.map