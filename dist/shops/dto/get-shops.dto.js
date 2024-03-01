"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopsDto = exports.ShopPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ShopPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/shop.entity").Shop] } };
    }
}
exports.ShopPaginator = ShopPaginator;
class GetShopsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, type: () => String }, search: { required: false, type: () => String }, sortedBy: { required: false, type: () => String }, is_active: { required: false, type: () => Boolean } };
    }
}
exports.GetShopsDto = GetShopsDto;
//# sourceMappingURL=get-shops.dto.js.map