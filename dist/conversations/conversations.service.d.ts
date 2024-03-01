import { CreateConversationDto } from './dto/create-conversation.dto';
import { Conversation } from './entities/conversation.entity';
import { GetConversationsDto } from './dto/get-conversations.dto';
export declare class ConversationsService {
    private conversations;
    create(createConversationDto: CreateConversationDto): Conversation;
    getAllConversations({ page, limit, search }: GetConversationsDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: Conversation[];
    };
    getConversation(param: string): Conversation;
}
