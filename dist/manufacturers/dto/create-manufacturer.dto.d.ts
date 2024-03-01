import { Manufacturer } from '../entities/manufacturer.entity';
declare const CreateManufacturerDto_base: import("@nestjs/common").Type<Omit<Manufacturer, "id" | "type" | "name" | "slug" | "translated_languages" | "cover_image" | "image" | "products_count" | "socials" | "description" | "type_id" | "website">>;
export declare class CreateManufacturerDto extends CreateManufacturerDto_base {
    shop_id?: string;
}
export {};
