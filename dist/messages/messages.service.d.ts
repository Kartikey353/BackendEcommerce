import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetConversationsDto } from 'src/conversations/dto/get-conversations.dto';
export declare class MessagesService {
    private messages;
    createMessage(createMessageDto: CreateMessageDto): Message;
    getMessages({ search, limit, page }: GetConversationsDto): {
        data: Message[];
    };
}
