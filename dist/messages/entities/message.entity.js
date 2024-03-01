"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const openapi = require("@nestjs/swagger");
const conversation_entity_1 = require("../../conversations/entities/conversation.entity");
class Message extends conversation_entity_1.LatestMessage {
    static _OPENAPI_METADATA_FACTORY() {
        return { conversation: { required: true, type: () => require("../../conversations/entities/conversation.entity").Conversation } };
    }
}
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map