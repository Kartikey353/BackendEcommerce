import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Manufacturer } from '../entities/manufacturer.entity';
export declare class ManufacturerPaginator extends Paginator<Manufacturer> {
    data: Manufacturer[];
}
export declare class GetManufacturersDto extends PaginationArgs {
    orderBy?: QueryManufacturersOrderByColumn;
    sortedBy?: SortOrder;
    search?: string;
    language?: string;
}
export declare enum QueryManufacturersOrderByColumn {
    CREATED_AT = "CREATED_AT",
    NAME = "NAME",
    UPDATED_AT = "UPDATED_AT"
}
