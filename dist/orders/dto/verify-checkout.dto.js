"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifiedCheckoutData = exports.CheckoutVerificationDto = void 0;
const openapi = require("@nestjs/swagger");
class CheckoutVerificationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, products: { required: true, type: () => [require("./create-order.dto").ConnectProductOrderPivot] }, billing_address: { required: false, type: () => require("./create-order.dto").UserAddressInput }, shipping_address: { required: false, type: () => require("./create-order.dto").UserAddressInput }, customer_id: { required: false, type: () => String } };
    }
}
exports.CheckoutVerificationDto = CheckoutVerificationDto;
class VerifiedCheckoutData {
    static _OPENAPI_METADATA_FACTORY() {
        return { total_tax: { required: true, type: () => Number }, shipping_charge: { required: true, type: () => Number }, unavailable_products: { required: true, type: () => [Number] }, wallet_currency: { required: true, type: () => Number }, wallet_amount: { required: true, type: () => Number } };
    }
}
exports.VerifiedCheckoutData = VerifiedCheckoutData;
//# sourceMappingURL=verify-checkout.dto.js.map