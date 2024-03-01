"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewSubscriberDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateNewSubscriberDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
exports.CreateNewSubscriberDto = CreateNewSubscriberDto;
//# sourceMappingURL=create-new-subscriber.dto.js.map