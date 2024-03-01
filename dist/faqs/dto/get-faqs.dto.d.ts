import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Faq } from 'src/faqs/entities/faq.entity';
export declare class FaqPaginator extends Paginator<Faq> {
    data: Faq[];
}
export declare class GetFaqsDto extends PaginationArgs {
    orderBy?: QueryReviewsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
    faq_type?: string;
    shop_id?: number;
    issued_by?: string;
}
export declare enum QueryReviewsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    FAQ_TITLE = "FAQ_TITLE",
    FAQ_DESCRIPTION = "FAQ_DESCRIPTION"
}
