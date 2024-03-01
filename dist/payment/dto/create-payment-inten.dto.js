"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceContext = exports.Paypal = exports.PaymentSource = exports.Amount = exports.PurchaseUnit = exports.PaypalCreateIntentPram = void 0;
const openapi = require("@nestjs/swagger");
class PaypalCreateIntentPram {
    static _OPENAPI_METADATA_FACTORY() {
        return { intent: { required: true, type: () => String }, purchase_units: { required: true, type: () => [require("./create-payment-inten.dto").PurchaseUnit] }, payment_source: { required: true, type: () => require("./create-payment-inten.dto").PaymentSource } };
    }
}
exports.PaypalCreateIntentPram = PaypalCreateIntentPram;
class PurchaseUnit {
    static _OPENAPI_METADATA_FACTORY() {
        return { invoice_id: { required: true, type: () => Number }, amount: { required: true, type: () => require("./create-payment-inten.dto").Amount }, description: { required: true, type: () => String } };
    }
}
exports.PurchaseUnit = PurchaseUnit;
class Amount {
    static _OPENAPI_METADATA_FACTORY() {
        return { currency_code: { required: true, type: () => String }, value: { required: true, type: () => Number } };
    }
}
exports.Amount = Amount;
class PaymentSource {
    static _OPENAPI_METADATA_FACTORY() {
        return { paypal: { required: true, type: () => require("./create-payment-inten.dto").Paypal } };
    }
}
exports.PaymentSource = PaymentSource;
class Paypal {
    static _OPENAPI_METADATA_FACTORY() {
        return { experience_context: { required: true, type: () => require("./create-payment-inten.dto").ExperienceContext } };
    }
}
exports.Paypal = Paypal;
class ExperienceContext {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_action: { required: true, type: () => String }, payment_method_preference: { required: true, type: () => String }, cancel_url: { required: true, type: () => String }, return_url: { required: true, type: () => String } };
    }
}
exports.ExperienceContext = ExperienceContext;
//# sourceMappingURL=create-payment-inten.dto.js.map