import { GetFaqsDto } from './dto/get-faqs.dto';
import { Faq } from './entities/faq.entity';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
export declare class FaqsService {
    private faqs;
    create(createFaqDto: CreateFaqDto): Faq;
    findAllFaqs({ search, limit, page, shop_id }: GetFaqsDto): {
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
        data: Faq[];
    };
    getFaq(param: string, language: string): Faq;
    update(id: number, updateFaqDto: UpdateFaqDto): Faq;
    remove(id: number): string;
}
