"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreMutationOutput = void 0;
const openapi = require("@nestjs/swagger");
class CoreMutationOutput {
    static _OPENAPI_METADATA_FACTORY() {
        return { message: { required: true, type: () => String }, success: { required: true, type: () => Boolean } };
    }
}
exports.CoreMutationOutput = CoreMutationOutput;
//# sourceMappingURL=core-mutation-output.dto.js.map