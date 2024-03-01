import { SortOrder } from 'src/common/dto/generic-conditions.dto';
export declare class GetTypesDto {
    orderBy?: QueryTypesOrderByOrderByClause[];
    text?: string;
    language?: string;
    search?: string;
}
export declare class QueryTypesOrderByOrderByClause {
    column: QueryTypesOrderByColumn;
    order: SortOrder;
}
export declare enum QueryTypesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
