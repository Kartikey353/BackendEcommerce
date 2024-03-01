"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaymentIntentDto = void 0;
const openapi = require("@nestjs/swagger");
class GetPaymentIntentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tracking_number: { required: true, type: () => Number }, payment_gateway: { required: true, type: () => String }, recall_gateway: { required: true, type: () => Boolean } };
    }
}
exports.GetPaymentIntentDto = GetPaymentIntentDto;
//# sourceMappingURL=get-payment-intent.dto.js.map