import { GetConversationsDto } from 'src/conversations/dto/get-conversations.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    createMessage(createMessageDto: CreateMessageDto): import("./entities/message.entity").Message;
    getMessages(query: GetConversationsDto): {
        data: import("./entities/message.entity").Message[];
    };
}
