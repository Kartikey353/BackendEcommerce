import { SortOrder } from 'src/common/dto/generic-conditions.dto';
export declare class GetShippingsDto {
    text?: string;
    orderBy?: QueryShippingClassesOrderByColumn;
    sortedBy?: SortOrder;
}
export declare enum QueryShippingClassesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    NAME = "NAME",
    AMOUNT = "AMOUNT",
    IS_GLOBAL = "IS_GLOBAL",
    TYPE = "TYPE"
}
