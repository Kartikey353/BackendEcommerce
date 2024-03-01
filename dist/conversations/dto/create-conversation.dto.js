"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConversationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const conversation_entity_1 = require("../entities/conversation.entity");
class CreateConversationDto extends (0, swagger_1.PickType)(conversation_entity_1.Conversation, [
    'shop_id',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateConversationDto = CreateConversationDto;
//# sourceMappingURL=create-conversation.dto.js.map