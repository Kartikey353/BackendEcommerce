import { SortOrder } from 'src/common/dto/generic-conditions.dto';
export declare class GetTaxesDto {
    text?: string;
    orderBy?: QueryTaxClassesOrderByColumn;
    sortedBy?: SortOrder;
}
export declare enum QueryTaxClassesOrderByColumn {
    CREATED_AT = "CREATED_AT",
    UPDATED_AT = "UPDATED_AT",
    NAME = "NAME",
    RATE = "RATE",
    COUNTRY = "COUNTRY",
    STATE = "STATE"
}
