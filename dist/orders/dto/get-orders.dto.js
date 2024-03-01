"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersDto = exports.OrderPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class OrderPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/order.entity").Order] } };
    }
}
exports.OrderPaginator = OrderPaginator;
class GetOrdersDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { tracking_number: { required: false, type: () => String }, orderBy: { required: false, type: () => String }, sortedBy: { required: false, type: () => String }, customer_id: { required: false, type: () => Number }, shop_id: { required: false, type: () => String }, search: { required: false, type: () => String } };
    }
}
exports.GetOrdersDto = GetOrdersDto;
//# sourceMappingURL=get-orders.dto.js.map