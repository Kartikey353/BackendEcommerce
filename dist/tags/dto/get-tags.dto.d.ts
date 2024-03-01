import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Tag } from '../entities/tag.entity';
export declare class TagPaginator extends Paginator<Tag> {
    data: Tag[];
}
export declare class GetTagsDto extends PaginationArgs {
    orderBy?: QueryTagsOrderByColumn;
    sortedBy?: SortOrder;
    text?: string;
    name?: string;
    hasType?: string;
    language?: string;
    search?: string;
}
export declare enum QueryTagsOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
