import { FlashSale } from '../entities/flash-sale.entity';
declare const CreateFlashSaleDto_base: import("@nestjs/common").Type<Pick<FlashSale, "title" | "type" | "products" | "description" | "end_date" | "start_date" | "sale_builder">>;
export declare class CreateFlashSaleDto extends CreateFlashSaleDto_base {
}
export {};
