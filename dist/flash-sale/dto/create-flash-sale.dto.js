"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFlashSaleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const flash_sale_entity_1 = require("../entities/flash-sale.entity");
class CreateFlashSaleDto extends (0, swagger_1.PickType)(flash_sale_entity_1.FlashSale, [
    'title',
    'description',
    'end_date',
    'start_date',
    'type',
    'sale_builder',
    'products',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateFlashSaleDto = CreateFlashSaleDto;
//# sourceMappingURL=create-flash-sale.dto.js.map