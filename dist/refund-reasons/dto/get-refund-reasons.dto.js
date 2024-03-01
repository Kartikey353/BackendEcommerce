"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryReviewsOrderByColumn = exports.GetRefundReasonDto = exports.RefundReasonPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class RefundReasonPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/refund-reasons.entity").RefundReason] } };
    }
}
exports.RefundReasonPaginator = RefundReasonPaginator;
class GetRefundReasonDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-refund-reasons.dto").QueryReviewsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String } };
    }
}
exports.GetRefundReasonDto = GetRefundReasonDto;
var QueryReviewsOrderByColumn;
(function (QueryReviewsOrderByColumn) {
    QueryReviewsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryReviewsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryReviewsOrderByColumn["NAME"] = "name";
})(QueryReviewsOrderByColumn = exports.QueryReviewsOrderByColumn || (exports.QueryReviewsOrderByColumn = {}));
//# sourceMappingURL=get-refund-reasons.dto.js.map