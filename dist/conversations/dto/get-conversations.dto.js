"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetConversationsDto = exports.ConversationPaginator = void 0;
const openapi = require("@nestjs/swagger");
const pagination_args_dto_1 = require("../../common/dto/pagination-args.dto");
const paginator_dto_1 = require("../../common/dto/paginator.dto");
class ConversationPaginator extends paginator_dto_1.Paginator {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("../entities/conversation.entity").Conversation] } };
    }
}
exports.ConversationPaginator = ConversationPaginator;
class GetConversationsDto extends pagination_args_dto_1.PaginationArgs {
    static _OPENAPI_METADATA_FACTORY() {
        return { orderBy: { required: false, type: () => String }, sortedBy: { required: false, enum: require("../../common/dto/generic-conditions.dto").SortOrder }, search: { required: false, type: () => String }, language: { required: false, type: () => String } };
    }
}
exports.GetConversationsDto = GetConversationsDto;
//# sourceMappingURL=get-conversations.dto.js.map