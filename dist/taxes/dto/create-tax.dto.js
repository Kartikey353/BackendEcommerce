"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaxDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const tax_entity_1 = require("../entities/tax.entity");
class CreateTaxDto extends (0, swagger_1.OmitType)(tax_entity_1.Tax, [
    'id',
    'created_at',
    'updated_at',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateTaxDto = CreateTaxDto;
//# sourceMappingURL=create-tax.dto.js.map