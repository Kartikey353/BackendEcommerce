"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = exports.CouponType = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
var CouponType;
(function (CouponType) {
    CouponType["FIXED_COUPON"] = "fixed";
    CouponType["PERCENTAGE_COUPON"] = "percentage";
    CouponType["FREE_SHIPPING_COUPON"] = "free_shipping";
    CouponType["DEFAULT_COUPON"] = "fixed";
})(CouponType = exports.CouponType || (exports.CouponType = {}));
class Coupon extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String }, description: { required: false, type: () => String }, minimum_cart_amount: { required: true, type: () => Number }, orders: { required: false, type: () => [require("../../orders/entities/order.entity").Order] }, type: { required: true, enum: require("./coupon.entity").CouponType }, image: { required: true, type: () => require("../../common/entities/attachment.entity").Attachment }, is_valid: { required: true, type: () => Boolean }, amount: { required: true, type: () => Number }, active_from: { required: true, type: () => String }, expire_at: { required: true, type: () => String }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] }, target: { required: false, type: () => Boolean }, shop_id: { required: false, type: () => Number }, is_approve: { required: false, type: () => Boolean } };
    }
}
exports.Coupon = Coupon;
//# sourceMappingURL=coupon.entity.js.map