import { CreateFeedBackDto } from './dto/create-feedback.dto';
import { UpdateFeedBackDto } from './dto/update-feedback.dto';
export declare class FeedbackService {
    findAllFeedBacks(): string;
    findFeedBack(id: number): string;
    create(createFeedBackDto: CreateFeedBackDto): string;
    update(id: number, updateFeedbackDto: UpdateFeedBackDto): string;
    delete(id: number): string;
}
