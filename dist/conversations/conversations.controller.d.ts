import { ConversationsService } from './conversations.service';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { ConversationPaginator, GetConversationsDto } from './dto/get-conversations.dto';
export declare class ConversationsController {
    private readonly conversationsService;
    constructor(conversationsService: ConversationsService);
    createConversation(createConversationDto: CreateConversationDto): import("./entities/conversation.entity").Conversation;
    getConversations(query: GetConversationsDto): Promise<ConversationPaginator>;
    getStoreNotice(param: string): import("./entities/conversation.entity").Conversation;
}
