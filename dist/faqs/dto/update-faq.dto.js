"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFaqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_faq_dto_1 = require("./create-faq.dto");
class UpdateFaqDto extends (0, swagger_1.PartialType)(create_faq_dto_1.CreateFaqDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFaqDto = UpdateFaqDto;
//# sourceMappingURL=update-faq.dto.js.map