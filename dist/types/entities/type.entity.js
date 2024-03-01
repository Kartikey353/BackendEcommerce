"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSettings = exports.Banner = exports.Type = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Type extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, slug: { required: true, type: () => String }, image: { required: true, type: () => require("../../common/entities/attachment.entity").Attachment }, icon: { required: true, type: () => String }, banners: { required: false, type: () => [require("./type.entity").Banner] }, promotional_sliders: { required: false, type: () => [require("../../common/entities/attachment.entity").Attachment] }, settings: { required: false, type: () => require("./type.entity").TypeSettings }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Type = Type;
class Banner {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, title: { required: false, type: () => String }, description: { required: false, type: () => String }, image: { required: true, type: () => require("../../common/entities/attachment.entity").Attachment } };
    }
}
exports.Banner = Banner;
class TypeSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { isHome: { required: true, type: () => Boolean }, layoutType: { required: true, type: () => String }, productCard: { required: true, type: () => String } };
    }
}
exports.TypeSettings = TypeSettings;
//# sourceMappingURL=type.entity.js.map