"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSettingDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_setting_dto_1 = require("./create-setting.dto");
class UpdateSettingDto extends (0, mapped_types_1.PartialType)(create_setting_dto_1.CreateSettingDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSettingDto = UpdateSettingDto;
//# sourceMappingURL=update-setting.dto.js.map