"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateReviewDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { rating: { required: true, type: () => Number }, comment: { required: true, type: () => String }, photos: { required: false, type: () => [require("../../common/entities/attachment.entity").Attachment] }, product_id: { required: true, type: () => String }, shop_id: { required: true, type: () => String }, order_id: { required: true, type: () => String }, variation_option_id: { required: true, type: () => Number } };
    }
}
exports.CreateReviewDto = CreateReviewDto;
//# sourceMappingURL=create-review.dto.js.map