"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveWithdrawDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const withdraw_entity_1 = require("../entities/withdraw.entity");
class ApproveWithdrawDto extends (0, swagger_1.PickType)(withdraw_entity_1.Withdraw, ['id', 'status']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ApproveWithdrawDto = ApproveWithdrawDto;
//# sourceMappingURL=approve-withdraw.dto.js.map