"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPopularProductsDto = void 0;
const openapi = require("@nestjs/swagger");
class GetPopularProductsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { type_slug: { required: false, type: () => String }, limit: { required: true, type: () => Number }, shop_id: { required: false, type: () => Number } };
    }
}
exports.GetPopularProductsDto = GetPopularProductsDto;
//# sourceMappingURL=get-popular-products.dto.js.map