"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faq = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Faq extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { translated_languages: { required: true, type: () => [String] }, language: { required: true, type: () => String }, faq_title: { required: true, type: () => String }, slug: { required: true, type: () => String }, faq_description: { required: true, type: () => String }, shop_id: { required: false, type: () => String }, issued_by: { required: false, type: () => String }, faq_type: { required: false, type: () => String }, user_id: { required: true, type: () => String }, deleted_at: { required: false, type: () => String } };
    }
}
exports.Faq = Faq;
//# sourceMappingURL=faq.entity.js.map