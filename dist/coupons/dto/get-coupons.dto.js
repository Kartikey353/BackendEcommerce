"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCouponsOrderByColumn = exports.GetCouponsDto = exports.CouponPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class CouponPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/coupon.entity").Coupon] } };
    }
}
exports.CouponPaginator = CouponPaginator;
class GetCouponsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, enum: require("./get-coupons.dto").QueryCouponsOrderByColumn }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, shop_id: { required: false, type: () => Number }, language: { required: false, type: () => String } };
    }
}
exports.GetCouponsDto = GetCouponsDto;
var QueryCouponsOrderByColumn;
(function (QueryCouponsOrderByColumn) {
    QueryCouponsOrderByColumn["CREATED_AT"] = "created_at";
    QueryCouponsOrderByColumn["EXPIRE_AT"] = "expire_at";
    QueryCouponsOrderByColumn["ID"] = "id";
    QueryCouponsOrderByColumn["CODE"] = "code";
    QueryCouponsOrderByColumn["AMOUNT"] = "amount";
    QueryCouponsOrderByColumn["NAME"] = "title";
    QueryCouponsOrderByColumn["DESCRIPTION"] = "description";
    QueryCouponsOrderByColumn["MINIMUM_CART_AMOUNT"] = "minimum_cart_amount";
    QueryCouponsOrderByColumn["IS_APPROVE"] = "is_approve";
    QueryCouponsOrderByColumn["TYPE"] = "type";
})(QueryCouponsOrderByColumn = exports.QueryCouponsOrderByColumn || (exports.QueryCouponsOrderByColumn = {}));
//# sourceMappingURL=get-coupons.dto.js.map