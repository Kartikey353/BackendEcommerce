"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryReviewsOrderByColumn = exports.GetFlashSaleDto = exports.FlashSalePaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class FlashSalePaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/flash-sale.entity").FlashSale] } };
    }
}
exports.FlashSalePaginator = FlashSalePaginator;
class GetFlashSaleDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-flash-sales.dto").QueryReviewsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String } };
    }
}
exports.GetFlashSaleDto = GetFlashSaleDto;
var QueryReviewsOrderByColumn;
(function (QueryReviewsOrderByColumn) {
    QueryReviewsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryReviewsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryReviewsOrderByColumn["TITLE"] = "TITLE";
    QueryReviewsOrderByColumn["DESCRIPTION"] = "DESCRIPTION";
})(QueryReviewsOrderByColumn = exports.QueryReviewsOrderByColumn || (exports.QueryReviewsOrderByColumn = {}));
//# sourceMappingURL=get-flash-sales.dto.js.map