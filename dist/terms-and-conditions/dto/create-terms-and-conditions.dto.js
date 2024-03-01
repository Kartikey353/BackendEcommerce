"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTermsAndConditionsDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const terms_and_conditions_entity_1 = require("../entities/terms-and-conditions.entity");
class CreateTermsAndConditionsDto extends (0, swagger_1.PickType)(terms_and_conditions_entity_1.TermsAndConditions, [
    'title',
    'description',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateTermsAndConditionsDto = CreateTermsAndConditionsDto;
//# sourceMappingURL=create-terms-and-conditions.dto.js.map