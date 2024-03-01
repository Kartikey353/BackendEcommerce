import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { GetCouponsDto } from './dto/get-coupons.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
export declare class CouponsController {
    private readonly couponsService;
    constructor(couponsService: CouponsService);
    createCoupon(createCouponDto: CreateCouponDto): import("./entities/coupon.entity").Coupon;
    getCoupons(query: GetCouponsDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: import("./entities/coupon.entity").Coupon[];
    };
    getCoupon(param: string, language: string): import("./entities/coupon.entity").Coupon;
    verify(param: string, language: string): import("./entities/coupon.entity").Coupon;
    verifyCoupon(code: string): {
        is_valid: boolean;
        coupon: {
            id: number;
            code: string;
            description: any;
            image: {
                id: number;
                original: string;
                thumbnail: string;
            };
            type: string;
            amount: number;
            active_from: string;
            expire_at: string;
            created_at: string;
            updated_at: string;
            deleted_at: any;
            is_valid: boolean;
        };
    };
    updateCoupon(id: string, updateCouponDto: UpdateCouponDto): import("./entities/coupon.entity").Coupon;
    deleteCoupon(id: string): string;
}
export declare class DisapproveCouponController {
    private couponsService;
    constructor(couponsService: CouponsService);
    disapproveCoupon(id: any): Promise<import("./entities/coupon.entity").Coupon>;
}
export declare class ApproveCouponController {
    private couponsService;
    constructor(couponsService: CouponsService);
    approveCoupon(id: any): Promise<import("./entities/coupon.entity").Coupon>;
}
