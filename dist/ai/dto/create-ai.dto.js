"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAiDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateAiDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { prompt: { required: true, type: () => String } };
    }
}
exports.CreateAiDto = CreateAiDto;
//# sourceMappingURL=create-ai.dto.js.map