import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { TermsAndConditions } from '../entities/terms-and-conditions.entity';
export declare class TermsAndConditionsPaginator extends Paginator<TermsAndConditions> {
    data: TermsAndConditions[];
}
export declare class GetTermsAndConditionsDto extends PaginationArgs {
    orderBy?: QueryReviewsOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
    type?: string;
    issued_by?: string;
    is_approved?: boolean;
    language?: string;
    searchJoin?: string;
    shop_id?: number;
}
export declare enum QueryReviewsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    TITLE = "TITLE",
    DESCRIPTION = "DESCRIPTION"
}
