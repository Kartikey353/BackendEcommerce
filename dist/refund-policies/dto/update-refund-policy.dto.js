"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRefundPolicyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_refund_policy_dto_1 = require("./create-refund-policy.dto");
class UpdateRefundPolicyDto extends (0, swagger_1.PartialType)(create_refund_policy_dto_1.CreateRefundPolicyDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateRefundPolicyDto = UpdateRefundPolicyDto;
//# sourceMappingURL=update-refund-policy.dto.js.map