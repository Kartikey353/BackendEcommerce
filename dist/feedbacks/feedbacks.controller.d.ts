import { CreateFeedBackDto } from './dto/create-feedback.dto';
import { UpdateFeedBackDto } from './dto/update-feedback.dto';
import { FeedbackService } from './feedbacks.service';
export declare class FeedbackController {
    private feedbackService;
    constructor(feedbackService: FeedbackService);
    findAll(): Promise<string>;
    find(id: number): string;
    create(createFeedBackDto: CreateFeedBackDto): string;
    update(id: string, updateFeedBackDto: UpdateFeedBackDto): string;
    delete(id: string): string;
}
