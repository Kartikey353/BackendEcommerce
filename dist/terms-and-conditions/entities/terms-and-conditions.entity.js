"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsAndConditions = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class TermsAndConditions extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { translated_languages: { required: true, type: () => [String] }, language: { required: true, type: () => String }, title: { required: true, type: () => String }, slug: { required: true, type: () => String }, description: { required: true, type: () => String }, shop_id: { required: false, type: () => String }, type: { required: false, type: () => String }, issued_by: { required: false, type: () => String }, user_id: { required: true, type: () => String }, deleted_at: { required: false, type: () => String }, is_approved: { required: false, type: () => Boolean } };
    }
}
exports.TermsAndConditions = TermsAndConditions;
//# sourceMappingURL=terms-and-conditions.entity.js.map