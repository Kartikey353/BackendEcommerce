"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRefundReasonDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_refund_reasons_dto_1 = require("./create-refund-reasons.dto");
class UpdateRefundReasonDto extends (0, swagger_1.PartialType)(create_refund_reasons_dto_1.CreateRefundReasonDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateRefundReasonDto = UpdateRefundReasonDto;
//# sourceMappingURL=update-refund-reasons.dto.js.map