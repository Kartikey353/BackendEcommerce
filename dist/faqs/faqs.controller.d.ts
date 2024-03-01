import { FaqsService } from './faqs.service';
import { GetFaqsDto } from './dto/get-faqs.dto';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
export declare class FaqsController {
    private faqService;
    constructor(faqService: FaqsService);
    createFaq(createFaqDto: CreateFaqDto): import("./entities/faq.entity").Faq;
    findAll(query: GetFaqsDto): {
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
        data: import("./entities/faq.entity").Faq[];
    };
    getFaq(param: string, language: string): import("./entities/faq.entity").Faq;
    update(id: string, language: string, updateFaqDto: UpdateFaqDto): import("./entities/faq.entity").Faq;
    deleteFaq(id: string): string;
}
