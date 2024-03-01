"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBestSellingProductsDto = void 0;
const openapi = require("@nestjs/swagger");
class GetBestSellingProductsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type_slug: { required: false, type: () => String }, limit: { required: true, type: () => Number }, shop_id: { required: false, type: () => Number } };
    }
}
exports.GetBestSellingProductsDto = GetBestSellingProductsDto;
//# sourceMappingURL=get-best-selling-products.dto.js.map