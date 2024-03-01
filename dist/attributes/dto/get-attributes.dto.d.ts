import { SortOrder } from 'src/common/dto/generic-conditions.dto';
export declare class GetAttributesArgs {
    orderBy?: QueryAttributesOrderByOrderByClause[];
    shop_id?: number;
    language?: string;
}
export declare class QueryAttributesOrderByOrderByClause {
    column: QueryAttributesOrderByColumn;
    order: SortOrder;
}
export declare enum QueryAttributesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
