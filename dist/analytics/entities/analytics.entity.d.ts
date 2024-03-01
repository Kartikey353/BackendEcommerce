import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Analytics extends CoreEntity {
    totalRevenue?: number;
    totalShops?: number;
    todaysRevenue?: number;
    totalOrders?: number;
    newCustomers?: number;
    totalYearSaleByMonth?: TotalYearSaleByMonth[];
}
export declare class TotalYearSaleByMonth {
    total?: number;
    month?: string;
}
