"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manufacturer = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Manufacturer extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { cover_image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, description: { required: false, type: () => String }, image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, is_approved: { required: false, type: () => Boolean }, name: { required: true, type: () => String }, products_count: { required: false, type: () => Number }, slug: { required: false, type: () => String }, socials: { required: false, type: () => require("../../settings/entities/setting.entity").ShopSocials }, type: { required: true, type: () => require("../../types/entities/type.entity").Type }, type_id: { required: false, type: () => String }, website: { required: false, type: () => String }, language: { required: false, type: () => String }, translated_languages: { required: false, type: () => [String] } };
    }
}
exports.Manufacturer = Manufacturer;
//# sourceMappingURL=manufacturer.entity.js.map