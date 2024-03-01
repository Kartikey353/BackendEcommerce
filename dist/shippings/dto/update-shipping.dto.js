"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShippingDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_shipping_dto_1 = require("./create-shipping.dto");
class UpdateShippingDto extends (0, swagger_1.PartialType)(create_shipping_dto_1.CreateShippingDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateShippingDto = UpdateShippingDto;
//# sourceMappingURL=update-shipping.dto.js.map