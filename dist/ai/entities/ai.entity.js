"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ai = void 0;
const openapi = require("@nestjs/swagger");
class Ai {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Object }, result: { required: true, type: () => String } };
    }
}
exports.Ai = Ai;
//# sourceMappingURL=ai.entity.js.map