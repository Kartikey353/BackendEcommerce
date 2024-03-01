"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = exports.LatestMessage = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class LatestMessage extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { body: { required: true, type: () => String }, conversation_id: { required: true, type: () => String }, user_id: { required: true, type: () => String } };
    }
}
exports.LatestMessage = LatestMessage;
class Conversation extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { shop_id: { required: true, type: () => Number }, unseen: { required: true, type: () => Boolean }, user_id: { required: true, type: () => String }, user: { required: true, type: () => require("../../users/entities/user.entity").User }, shop: { required: true, type: () => require("../../shops/entities/shop.entity").Shop }, latest_message: { required: true, type: () => require("./conversation.entity").LatestMessage } };
    }
}
exports.Conversation = Conversation;
//# sourceMappingURL=conversation.entity.js.map