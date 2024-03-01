import { Setting } from '../entities/setting.entity';
declare const CreateSettingDto_base: import("@nestjs/common").Type<Omit<Setting, "created_at" | "updated_at">>;
export declare class CreateSettingDto extends CreateSettingDto_base {
}
export {};
