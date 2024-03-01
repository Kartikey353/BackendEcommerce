"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportDto = void 0;
const openapi = require("@nestjs/swagger");
class ImportDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { shop_id: { required: true, type: () => Number } };
    }
}
exports.ImportDto = ImportDto;
//# sourceMappingURL=create-import.dto.js.map