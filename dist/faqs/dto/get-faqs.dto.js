"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryReviewsOrderByColumn = exports.GetFaqsDto = exports.FaqPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class FaqPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/faq.entity").Faq] } };
    }
}
exports.FaqPaginator = FaqPaginator;
class GetFaqsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-faqs.dto").QueryReviewsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, faq_type: { required: false, type: () => String }, shop_id: { required: false, type: () => Number }, issued_by: { required: false, type: () => String } };
    }
}
exports.GetFaqsDto = GetFaqsDto;
var QueryReviewsOrderByColumn;
(function (QueryReviewsOrderByColumn) {
    QueryReviewsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryReviewsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryReviewsOrderByColumn["FAQ_TITLE"] = "FAQ_TITLE";
    QueryReviewsOrderByColumn["FAQ_DESCRIPTION"] = "FAQ_DESCRIPTION";
})(QueryReviewsOrderByColumn = exports.QueryReviewsOrderByColumn || (exports.QueryReviewsOrderByColumn = {}));
//# sourceMappingURL=get-faqs.dto.js.map