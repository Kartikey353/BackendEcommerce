"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFaqDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const faq_entity_1 = require("../entities/faq.entity");
class CreateFaqDto extends (0, swagger_1.PickType)(faq_entity_1.Faq, [
    'faq_title',
    'faq_description',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateFaqDto = CreateFaqDto;
//# sourceMappingURL=create-faq.dto.js.map