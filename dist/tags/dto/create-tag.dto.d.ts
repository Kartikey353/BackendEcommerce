import { Tag } from '../entities/tag.entity';
declare const CreateTagDto_base: import("@nestjs/common").Type<Pick<Tag, "language" | "type" | "name" | "image" | "details" | "icon">>;
export declare class CreateTagDto extends CreateTagDto_base {
}
export {};
