"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryReviewsOrderByColumn = exports.GetReviewsDto = exports.ReviewPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ReviewPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/review.entity").Review] } };
    }
}
exports.ReviewPaginator = ReviewPaginator;
class GetReviewsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-reviews.dto").QueryReviewsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, product_id: { required: false, type: () => String } };
    }
}
exports.GetReviewsDto = GetReviewsDto;
var QueryReviewsOrderByColumn;
(function (QueryReviewsOrderByColumn) {
    QueryReviewsOrderByColumn["NAME"] = "NAME";
    QueryReviewsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryReviewsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryReviewsOrderByColumn = exports.QueryReviewsOrderByColumn || (exports.QueryReviewsOrderByColumn = {}));
//# sourceMappingURL=get-reviews.dto.js.map