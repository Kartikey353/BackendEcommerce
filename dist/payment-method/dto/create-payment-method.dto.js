"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentMethodDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const payment_method_entity_1 = require("../entities/payment-method.entity");
class CreatePaymentMethodDto extends (0, swagger_1.OmitType)(payment_method_entity_1.PaymentMethod, [
    'id',
    'created_at',
    'updated_at',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreatePaymentMethodDto = CreatePaymentMethodDto;
//# sourceMappingURL=create-payment-method.dto.js.map