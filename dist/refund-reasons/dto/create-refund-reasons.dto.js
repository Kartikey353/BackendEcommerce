"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRefundReasonDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const refund_reasons_entity_1 = require("../entities/refund-reasons.entity");
class CreateRefundReasonDto extends (0, swagger_1.PickType)(refund_reasons_entity_1.RefundReason, ['name']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateRefundReasonDto = CreateRefundReasonDto;
//# sourceMappingURL=create-refund-reasons.dto.js.map