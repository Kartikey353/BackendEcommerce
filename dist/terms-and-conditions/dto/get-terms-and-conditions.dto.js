"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryReviewsOrderByColumn = exports.GetTermsAndConditionsDto = exports.TermsAndConditionsPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class TermsAndConditionsPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/terms-and-conditions.entity").TermsAndConditions] } };
    }
}
exports.TermsAndConditionsPaginator = TermsAndConditionsPaginator;
class GetTermsAndConditionsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-terms-and-conditions.dto").QueryReviewsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, type: { required: false, type: () => String }, issued_by: { required: false, type: () => String }, is_approved: { required: false, type: () => Boolean }, language: { required: false, type: () => String }, searchJoin: { required: false, type: () => String }, shop_id: { required: false, type: () => Number } };
    }
}
exports.GetTermsAndConditionsDto = GetTermsAndConditionsDto;
var QueryReviewsOrderByColumn;
(function (QueryReviewsOrderByColumn) {
    QueryReviewsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryReviewsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryReviewsOrderByColumn["TITLE"] = "TITLE";
    QueryReviewsOrderByColumn["DESCRIPTION"] = "DESCRIPTION";
})(QueryReviewsOrderByColumn = exports.QueryReviewsOrderByColumn || (exports.QueryReviewsOrderByColumn = {}));
//# sourceMappingURL=get-terms-and-conditions.dto.js.map