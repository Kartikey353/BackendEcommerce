"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const setting_entity_1 = require("../entities/setting.entity");
class CreateSettingDto extends (0, swagger_1.OmitType)(setting_entity_1.Setting, [
    'created_at',
    'updated_at',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateSettingDto = CreateSettingDto;
//# sourceMappingURL=create-setting.dto.js.map