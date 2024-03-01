import { Shop } from '../entities/shop.entity';
declare const CreateShopDto_base: import("@nestjs/common").Type<Pick<Shop, "address" | "name" | "cover_image" | "description" | "settings" | "logo" | "balance">>;
export declare class CreateShopDto extends CreateShopDto_base {
    categories: number[];
}
export declare class ApproveShopDto {
    id: number;
    admin_commission_rate: number;
}
export {};
