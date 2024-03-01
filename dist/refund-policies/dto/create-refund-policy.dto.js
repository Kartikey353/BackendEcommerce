"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRefundPolicyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const refund_policies_entity_1 = require("../entities/refund-policies.entity");
class CreateRefundPolicyDto extends (0, swagger_1.PickType)(refund_policies_entity_1.RefundPolicy, [
    'title',
    'status',
    'target',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateRefundPolicyDto = CreateRefundPolicyDto;
//# sourceMappingURL=create-refund-policy.dto.js.map