"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const setting_entity_1 = require("./entities/setting.entity");
const settings_json_1 = __importDefault(require("../db/pickbazar/settings.json"));
const settings = (0, class_transformer_1.plainToClass)(setting_entity_1.Setting, settings_json_1.default);
let SettingsService = class SettingsService {
    constructor() {
        this.settings = settings;
    }
    create(createSettingDto) {
        return this.settings;
    }
    findAll() {
        return this.settings;
    }
    findOne(id) {
        return `This action returns a #${id} setting`;
    }
    update(id, updateSettingDto) {
        return this.settings;
    }
    remove(id) {
        return `This action removes a #${id} setting`;
    }
};
SettingsService = __decorate([
    (0, common_1.Injectable)()
], SettingsService);
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map