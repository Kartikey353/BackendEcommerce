"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaxDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_tax_dto_1 = require("./create-tax.dto");
class UpdateTaxDto extends (0, swagger_1.PartialType)(create_tax_dto_1.CreateTaxDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateTaxDto = UpdateTaxDto;
//# sourceMappingURL=update-tax.dto.js.map