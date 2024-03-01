import { TermsAndConditions } from './entities/terms-and-conditions.entity';
import { GetTermsAndConditionsDto } from './dto/get-terms-and-conditions.dto';
import { CreateTermsAndConditionsDto } from './dto/create-terms-and-conditions.dto';
import { UpdateTermsAndConditionsDto } from './dto/update-terms-and-conditions.dto';
export declare class TermsAndConditionsService {
    private termsAndConditions;
    create(createTermsAndConditionsDto: CreateTermsAndConditionsDto): TermsAndConditions;
    findAllTermsAndConditions({ search, limit, page, is_approved, }: GetTermsAndConditionsDto): {
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
        data: TermsAndConditions[];
    };
    findOne(param: string, language: string): TermsAndConditions;
    update(id: number, updateTermsAndConditionsDto: UpdateTermsAndConditionsDto): TermsAndConditions;
    remove(id: number): string;
    disapproveTermsAndCondition(id: number): TermsAndConditions;
    approveTermsAndCondition(id: number): TermsAndConditions;
}
