"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Feedback extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => String }, model_type: { required: true, type: () => String }, model_id: { required: true, type: () => String }, positive: { required: false, type: () => Boolean }, negative: { required: false, type: () => Boolean } };
    }
}
exports.Feedback = Feedback;
//# sourceMappingURL=feedback.entity.js.map