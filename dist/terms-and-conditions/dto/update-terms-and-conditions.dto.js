"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTermsAndConditionsDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_terms_and_conditions_dto_1 = require("./create-terms-and-conditions.dto");
class UpdateTermsAndConditionsDto extends (0, swagger_1.PartialType)(create_terms_and_conditions_dto_1.CreateTermsAndConditionsDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateTermsAndConditionsDto = UpdateTermsAndConditionsDto;
//# sourceMappingURL=update-terms-and-conditions.dto.js.map