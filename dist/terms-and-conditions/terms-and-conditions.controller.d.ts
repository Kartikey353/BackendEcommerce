import { TermsAndConditionsService } from './terms-and-conditions.service';
import { GetTermsAndConditionsDto } from './dto/get-terms-and-conditions.dto';
import { CreateTermsAndConditionsDto } from './dto/create-terms-and-conditions.dto';
import { UpdateTermsAndConditionsDto } from './dto/update-terms-and-conditions.dto';
export declare class TermsAndConditionsController {
    private termsAndConditionsService;
    constructor(termsAndConditionsService: TermsAndConditionsService);
    createTermsAndConditions(createTermsAndConditionsDto: CreateTermsAndConditionsDto): import("./entities/terms-and-conditions.entity").TermsAndConditions;
    getTermsAndConditions(query: GetTermsAndConditionsDto): {
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
        data: import("./entities/terms-and-conditions.entity").TermsAndConditions[];
    };
    findOne(param: string, language: string): import("./entities/terms-and-conditions.entity").TermsAndConditions;
    updateTermsConditions(id: string, language: string, updateTermsAndConditionsDto: UpdateTermsAndConditionsDto): import("./entities/terms-and-conditions.entity").TermsAndConditions;
    deleteTermsAndConditions(id: string): string;
}
export declare class DisapproveTermsAndConditionController {
    private termsAndConditionsService;
    constructor(termsAndConditionsService: TermsAndConditionsService);
    disapproveTermsAndCondition(id: any): Promise<import("./entities/terms-and-conditions.entity").TermsAndConditions>;
}
export declare class ApproveTermsAndConditionController {
    private termsAndConditionsService;
    constructor(termsAndConditionsService: TermsAndConditionsService);
    approveTermsAndCondition(id: any): Promise<import("./entities/terms-and-conditions.entity").TermsAndConditions>;
}
