"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const message_entity_1 = require("../entities/message.entity");
class CreateMessageDto extends (0, swagger_1.PickType)(message_entity_1.Message, ['body']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateMessageDto = CreateMessageDto;
//# sourceMappingURL=create-message.dto.js.map