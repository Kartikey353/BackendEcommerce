import { RefundReason } from './entities/refund-reasons.entity';
import { UpdateRefundReasonDto } from './dto/update-refund-reasons.dto';
import { GetRefundReasonDto } from './dto/get-refund-reasons.dto';
import { CreateRefundReasonDto } from './dto/create-refund-reasons.dto';
export declare class RefundReasonsService {
    private refundReason;
    create(createRefundPolicyDto: CreateRefundReasonDto): RefundReason;
    findAllRefundPolicies({ search, limit, page }: GetRefundReasonDto): {
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
        data: RefundReason[];
    };
    getRefundPolicy(param: string, language: string): RefundReason;
    update(id: number, updateRefundDto: UpdateRefundReasonDto): RefundReason;
    remove(id: number): string;
}
