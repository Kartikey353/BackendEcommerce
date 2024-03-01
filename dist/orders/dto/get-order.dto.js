"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderArgs = void 0;
const openapi = require("@nestjs/swagger");
class GetOrderArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => Number }, tracking_number: { required: false, type: () => String } };
    }
}
exports.GetOrderArgs = GetOrderArgs;
//# sourceMappingURL=get-order.dto.js.map