"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentDto = void 0;
const openapi = require("@nestjs/swagger");
class OrderPaymentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tracking_number: { required: true, type: () => Number } };
    }
}
exports.OrderPaymentDto = OrderPaymentDto;
//# sourceMappingURL=order-payment.dto.js.map