"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlashSaleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_flash_sale_dto_1 = require("./create-flash-sale.dto");
class UpdateFlashSaleDto extends (0, swagger_1.PartialType)(create_flash_sale_dto_1.CreateFlashSaleDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFlashSaleDto = UpdateFlashSaleDto;
//# sourceMappingURL=update-flash-sale.dto.js.map