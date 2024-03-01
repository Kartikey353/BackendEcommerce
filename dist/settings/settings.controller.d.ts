import { CreateSettingDto } from './dto/create-setting.dto';
import { SettingsService } from './settings.service';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    create(createSettingDto: CreateSettingDto): import("./entities/setting.entity").Setting;
    findAll(): import("./entities/setting.entity").Setting;
}
