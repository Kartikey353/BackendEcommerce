"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTopManufacturersDto = void 0;
const openapi = require("@nestjs/swagger");
class GetTopManufacturersDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number } };
    }
}
exports.GetTopManufacturersDto = GetTopManufacturersDto;
//# sourceMappingURL=get-top-manufacturers.dto.js.map