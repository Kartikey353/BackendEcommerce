"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGateWay = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class PaymentGateWay extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { user_id: { required: true, type: () => Number }, customer_id: { required: true, type: () => String }, gateway_name: { required: true, type: () => String } };
    }
}
exports.PaymentGateWay = PaymentGateWay;
//# sourceMappingURL=payment-gateway.entity.js.map