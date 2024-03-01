"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Question extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => Number }, product_id: { required: true, type: () => Number }, shop_id: { required: true, type: () => Number }, question: { required: false, type: () => String }, answer: { required: true, type: () => String }, positive_feedbacks_count: { required: false, type: () => Number }, negative_feedbacks_count: { required: false, type: () => Number }, product: { required: true, type: () => require("../../products/entities/product.entity").Product }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, feedbacks: { required: false, type: () => [require("../../feedbacks/entities/feedback.entity").Feedback] }, my_feedback: { required: false, type: () => require("../../feedbacks/entities/feedback.entity").Feedback } };
    }
}
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map