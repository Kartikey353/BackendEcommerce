"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryProductsOrderByColumn = exports.GetProductsDto = exports.ProductPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ProductPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/product.entity").Product] } };
    }
}
exports.ProductPaginator = ProductPaginator;
class GetProductsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, type: () => String }, sortedBy: { required: false, type: () => String }, searchJoin: { required: false, type: () => String }, search: { required: false, type: () => String }, date_range: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetProductsDto = GetProductsDto;
var QueryProductsOrderByColumn;
(function (QueryProductsOrderByColumn) {
    QueryProductsOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryProductsOrderByColumn["NAME"] = "NAME";
    QueryProductsOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryProductsOrderByColumn = exports.QueryProductsOrderByColumn || (exports.QueryProductsOrderByColumn = {}));
//# sourceMappingURL=get-products.dto.js.map