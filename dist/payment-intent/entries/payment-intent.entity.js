"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentInfo = exports.PaymentIntent = void 0;
const openapi = require("@nestjs/swagger");
class PaymentIntent {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, order_id: { required: true, type: () => Number }, tracking_number: { required: true, type: () => String }, payment_gateway: { required: true, type: () => String }, payment_intent_info: { required: true, type: () => require("./payment-intent.entity").PaymentIntentInfo } };
    }
}
exports.PaymentIntent = PaymentIntent;
class PaymentIntentInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { client_secret: { required: false, type: () => String, nullable: true }, redirect_url: { required: false, type: () => String, nullable: true }, payment_id: { required: true, type: () => String }, is_redirect: { required: true, type: () => Boolean } };
    }
}
exports.PaymentIntentInfo = PaymentIntentInfo;
//# sourceMappingURL=payment-intent.entity.js.map