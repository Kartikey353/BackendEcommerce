import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { FlashSale } from '../entities/flash-sale.entity';
export declare class FlashSalePaginator extends Paginator<FlashSale> {
    data: FlashSale[];
}
export declare class GetFlashSaleDto extends PaginationArgs {
    orderBy?: QueryReviewsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
}
export declare enum QueryReviewsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    TITLE = "TITLE",
    DESCRIPTION = "DESCRIPTION"
}
