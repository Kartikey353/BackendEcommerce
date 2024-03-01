"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInput = exports.ConnectProductOrderPivot = exports.UserAddressInput = exports.CreateOrderDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateOrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { shop_id: { required: false, type: () => Number }, coupon_id: { required: false, type: () => Number }, status: { required: true, type: () => String }, customer_contact: { required: true, type: () => String }, products: { required: true, type: () => [require("./create-order.dto").ConnectProductOrderPivot] }, amount: { required: true, type: () => Number }, sales_tax: { required: true, type: () => Number }, total: { required: false, type: () => Number }, paid_total: { required: false, type: () => Number }, payment_id: { required: false, type: () => String }, payment_gateway: { required: false, enum: require("../entities/order.entity").PaymentGatewayType }, discount: { required: false, type: () => Number }, delivery_fee: { required: false, type: () => Number }, delivery_time: { required: true, type: () => String }, card: { required: false, type: () => require("./create-order.dto").CardInput }, billing_address: { required: false, type: () => require("./create-order.dto").UserAddressInput }, shipping_address: { required: false, type: () => require("./create-order.dto").UserAddressInput }, payment_intent: { required: true, type: () => require("../../payment-intent/entries/payment-intent.entity").PaymentIntent }, language: { required: false, type: () => String } };
    }
}
exports.CreateOrderDto = CreateOrderDto;
class UserAddressInput {
    static _OPENAPI_METADATA_FACTORY() {
        return { street_address: { required: true, type: () => String }, country: { required: true, type: () => String }, city: { required: true, type: () => String }, state: { required: true, type: () => String }, zip: { required: true, type: () => String } };
    }
}
exports.UserAddressInput = UserAddressInput;
class ConnectProductOrderPivot {
    static _OPENAPI_METADATA_FACTORY() {
        return { product_id: { required: true, type: () => Number }, variation_option_id: { required: false, type: () => Number }, order_quantity: { required: true, type: () => Number }, unit_price: { required: true, type: () => Number }, subtotal: { required: true, type: () => Number } };
    }
}
exports.ConnectProductOrderPivot = ConnectProductOrderPivot;
class CardInput {
    static _OPENAPI_METADATA_FACTORY() {
        return { number: { required: true, type: () => String }, expiryMonth: { required: true, type: () => String }, expiryYear: { required: true, type: () => String }, cvv: { required: true, type: () => String }, email: { required: false, type: () => String } };
    }
}
exports.CardInput = CardInput;
//# sourceMappingURL=create-order.dto.js.map