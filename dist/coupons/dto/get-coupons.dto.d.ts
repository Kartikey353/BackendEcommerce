import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Coupon } from '../entities/coupon.entity';
export declare class CouponPaginator extends Paginator<Coupon> {
    data: Coupon[];
}
export declare class GetCouponsDto extends PaginationArgs {
    orderBy?: QueryCouponsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
    shop_id?: number;
    language?: string;
}
export declare enum QueryCouponsOrderByColumn {
    CREATED_AT = "created_at",
    EXPIRE_AT = "expire_at",
    ID = "id",
    CODE = "code",
    AMOUNT = "amount",
    NAME = "title",
    DESCRIPTION = "description",
    MINIMUM_CART_AMOUNT = "minimum_cart_amount",
    IS_APPROVE = "is_approve",
    TYPE = "type"
}
