import { SortOrder } from 'src/common/dto/generic-conditions.dto';
import { PaginationArgs } from 'src/common/dto/pagination-args.dto';
import { Paginator } from 'src/common/dto/paginator.dto';
import { Conversation } from '../entities/conversation.entity';
export declare class ConversationPaginator extends Paginator<Conversation> {
    data: Conversation[];
}
export declare class GetConversationsDto extends PaginationArgs {
    orderBy?: string;
    sortedBy?: SortOrder;
    search?: string;
    language?: string;
}
