import { Category } from '../entities/category.entity';
declare const CreateCategoryDto_base: import("@nestjs/common").Type<Pick<Category, "language" | "type" | "name" | "image" | "details" | "parent" | "icon">>;
export declare class CreateCategoryDto extends CreateCategoryDto_base {
}
export {};
