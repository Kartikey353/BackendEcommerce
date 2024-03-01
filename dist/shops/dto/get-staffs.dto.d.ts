import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
export declare class GetStaffsDto extends PaginationArgs {
    orderBy?: string;
    sortedBy?: string;
    shop_id?: number;
}
