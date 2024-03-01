"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWithdrawsDto = exports.WithdrawPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class WithdrawPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/withdraw.entity").Withdraw] } };
    }
}
exports.WithdrawPaginator = WithdrawPaginator;
class GetWithdrawsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, type: () => String }, sortedBy: { required: false, type: () => String }, status: { required: false, type: () => String }, shop_id: { required: false, type: () => Number } };
    }
}
exports.GetWithdrawsDto = GetWithdrawsDto;
//# sourceMappingURL=get-withdraw.dto.js.map