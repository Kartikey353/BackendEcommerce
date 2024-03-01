"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryOrderStatusesOrderByColumn = exports.GetOrderStatusesDto = exports.OrderStatusPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class OrderStatusPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/order-status.entity").OrderStatus] } };
    }
}
exports.OrderStatusPaginator = OrderStatusPaginator;
class GetOrderStatusesDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-order-statuses.dto").QueryOrderStatusesOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetOrderStatusesDto = GetOrderStatusesDto;
var QueryOrderStatusesOrderByColumn;
(function (QueryOrderStatusesOrderByColumn) {
    QueryOrderStatusesOrderByColumn["CREATED_AT"] = "CREATED_AT";
    QueryOrderStatusesOrderByColumn["NAME"] = "NAME";
    QueryOrderStatusesOrderByColumn["UPDATED_AT"] = "UPDATED_AT";
    QueryOrderStatusesOrderByColumn["SERIAL"] = "SERIAL";
})(QueryOrderStatusesOrderByColumn = exports.QueryOrderStatusesOrderByColumn || (exports.QueryOrderStatusesOrderByColumn = {}));
//# sourceMappingURL=get-order-statuses.dto.js.map