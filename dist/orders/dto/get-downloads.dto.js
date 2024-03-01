"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOrderFilesOrderByColumn = exports.GetOrderFilesDto = exports.OrderFilesPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class OrderFilesPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/order.entity").OrderFiles] } };
    }
}
exports.OrderFilesPaginator = OrderFilesPaginator;
class GetOrderFilesDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-downloads.dto").QueryOrderFilesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder } };
    }
}
exports.GetOrderFilesDto = GetOrderFilesDto;
var QueryOrderFilesOrderByColumn;
(function (QueryOrderFilesOrderByColumn) {
    QueryOrderFilesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryOrderFilesOrderByColumn["NAME"] = "NAME";
    QueryOrderFilesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
})(QueryOrderFilesOrderByColumn = exports.QueryOrderFilesOrderByColumn || (exports.QueryOrderFilesOrderByColumn = {}));
//# sourceMappingURL=get-downloads.dto.js.map