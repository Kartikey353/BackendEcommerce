import { CreateReviewDto } from './dto/create-review.dto';
import { GetReviewsDto } from './dto/get-reviews.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewService } from './reviews.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    findAll(query: GetReviewsDto): Promise<{
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
        data: import("./entities/review.entity").Review[];
    }>;
    find(id: string): import("./entities/review.entity").Review;
    create(createReviewDto: CreateReviewDto): import("./entities/review.entity").Review;
    update(id: string, updateReviewDto: UpdateReviewDto): import("./entities/review.entity").Review;
    delete(id: string): import("./entities/review.entity").Review;
}
