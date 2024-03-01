import { CoreEntity } from 'src/common/entities/core.entity';
export declare class Shipping extends CoreEntity {
    name: string;
    amount: number;
    is_global: boolean;
    type: ShippingType;
}
export declare enum ShippingType {
    FIXED = "fixed",
    PERCENTAGE = "percentage",
    FREE = "free"
}
