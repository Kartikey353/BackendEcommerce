import { CreateNewSubscriberDto } from './dto/create-new-subscriber.dto';
export declare class NewslettersService {
    subscribeToNewsletter({ email }: CreateNewSubscriberDto): Promise<string>;
}
