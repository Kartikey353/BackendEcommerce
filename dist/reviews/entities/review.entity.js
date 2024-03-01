"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Review extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { rating: { required: true, type: () => Number }, name: { required: true, type: () => String }, comment: { required: true, type: () => String }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, order: { required: true, type: () => require("../../orders/entities/order.entity").Order }, customer: { required: true, type: () => require("../../users/entities/user.entity").User }, photos: { required: true, type: () => [require("../../common/entities/attachment.entity").Attachment] }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, product: { required: true, type: () => require("../../products/entities/product.entity").Product }, feedbacks: { required: true, type: () => [require("../../feedbacks/entities/feedback.entity").Feedback] }, my_feedback: { required: true, type: () => require("../../feedbacks/entities/feedback.entity").Feedback }, positive_feedbacks_count: { required: true, type: () => Number }, negative_feedbacks_count: { required: true, type: () => Number }, user_id: { required: true, type: () => Number }, product_id: { required: true, type: () => Number }, abusive_reports: { required: true, type: () => [require("./reports.entity").Report] }, shop_id: { required: true, type: () => String }, variation_option_id: { required: true, type: () => String }, abusive_reports_count: { required: false, type: () => Number } };
    }
}
exports.Review = Review;
//# sourceMappingURL=review.entity.js.map