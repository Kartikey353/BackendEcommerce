"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentMethodDto = void 0;
const openapi = require("@nestjs/swagger");
const create_payment_method_dto_1 = require("./create-payment-method.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdatePaymentMethodDto extends (0, swagger_1.PartialType)(create_payment_method_dto_1.CreatePaymentMethodDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePaymentMethodDto = UpdatePaymentMethodDto;
//# sourceMappingURL=update-payment-method.dto.js.map