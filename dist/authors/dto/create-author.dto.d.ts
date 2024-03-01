import { Author } from '../entities/author.entity';
declare const CreateAuthorDto_base: import("@nestjs/common").Type<Omit<Author, "id" | "name" | "slug" | "translated_languages" | "bio" | "born" | "cover_image" | "death" | "image" | "languages" | "products_count" | "quote" | "socials">>;
export declare class CreateAuthorDto extends CreateAuthorDto_base {
    shop_id?: string;
}
export {};
