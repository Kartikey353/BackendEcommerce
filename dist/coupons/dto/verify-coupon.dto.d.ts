import { Coupon } from '../entities/coupon.entity';
export declare class VerifyCouponInput {
    code: string;
}
export declare class VerifyCouponResponse {
    is_valid: boolean;
    coupon: Coupon;
}
