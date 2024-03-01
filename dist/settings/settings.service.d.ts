import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';
export declare class SettingsService {
    private settings;
    create(createSettingDto: CreateSettingDto): Setting;
    findAll(): Setting;
    findOne(id: number): string;
    update(id: number, updateSettingDto: UpdateSettingDto): Setting;
    remove(id: number): string;
}
