import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { GetReviewsDto } from './dto/get-reviews.dto';
import { Review } from './entities/review.entity';
export declare class ReviewService {
    private reviews;
    findAllReviews({ limit, page, search, product_id }: GetReviewsDto): {
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
        data: Review[];
    };
    findReview(id: number): Review;
    create(createReviewDto: CreateReviewDto): Review;
    update(id: number, updateReviewDto: UpdateReviewDto): Review;
    delete(id: number): Review;
}
