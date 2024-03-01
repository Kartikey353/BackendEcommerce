"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTopAuthorsDto = void 0;
const openapi = require("@nestjs/swagger");
class GetTopAuthorsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number } };
    }
}
exports.GetTopAuthorsDto = GetTopAuthorsDto;
//# sourceMappingURL=get-top-authors.dto.js.map