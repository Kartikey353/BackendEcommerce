"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStaffDto = void 0;
const openapi = require("@nestjs/swagger");
class AddStaffDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, password: { required: true, type: () => String }, name: { required: true, type: () => String }, shop_id: { required: true, type: () => Number } };
    }
}
exports.AddStaffDto = AddStaffDto;
//# sourceMappingURL=add-staff.dto.js.map