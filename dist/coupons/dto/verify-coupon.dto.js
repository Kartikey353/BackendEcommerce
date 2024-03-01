"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyCouponResponse = exports.VerifyCouponInput = void 0;
const openapi = require("@nestjs/swagger");
class VerifyCouponInput {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String } };
    }
}
exports.VerifyCouponInput = VerifyCouponInput;
class VerifyCouponResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { is_valid: { required: true, type: () => Boolean }, coupon: { required: true, type: () => require("../entities/coupon.entity").Coupon } };
    }
}
exports.VerifyCouponResponse = VerifyCouponResponse;
//# sourceMappingURL=verify-coupon.dto.js.map