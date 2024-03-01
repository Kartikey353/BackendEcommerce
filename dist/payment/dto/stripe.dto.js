"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentIntentDto = exports.CardElementDto = exports.Address = exports.StripeCreateCustomerDto = void 0;
const openapi = require("@nestjs/swagger");
class StripeCreateCustomerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { address: { required: false, type: () => require("./stripe.dto").Address }, description: { required: false, type: () => String }, name: { required: false, type: () => String }, email: { required: false, type: () => String } };
    }
}
exports.StripeCreateCustomerDto = StripeCreateCustomerDto;
class Address {
    static _OPENAPI_METADATA_FACTORY() {
        return { city: { required: false, type: () => String }, country: { required: false, type: () => String }, line1: { required: false, type: () => String }, line2: { required: false, type: () => String }, postal_code: { required: false, type: () => String }, state: { required: false, type: () => String } };
    }
}
exports.Address = Address;
class CardElementDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, exp_month: { required: true, type: () => Number }, exp_year: { required: true, type: () => Number }, cvc: { required: true, type: () => String } };
    }
}
exports.CardElementDto = CardElementDto;
class CreatePaymentIntentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, currency: { required: true, type: () => String } };
    }
}
exports.CreatePaymentIntentDto = CreatePaymentIntentDto;
//# sourceMappingURL=stripe.dto.js.map