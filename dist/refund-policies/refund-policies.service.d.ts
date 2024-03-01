import { RefundPolicy } from './entities/refund-policies.entity';
import { CreateRefundPolicyDto } from './dto/create-refund-policy.dto';
import { GetRefundPolicyDto } from './dto/get-refund-policies.dto';
import { UpdateRefundPolicyDto } from './dto/update-refund-policy.dto';
export declare class RefundPoliciesService {
    private refundPolicy;
    create(createRefundPolicyDto: CreateRefundPolicyDto): RefundPolicy;
    findAllRefundPolicies({ search, limit, page }: GetRefundPolicyDto): {
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
        data: RefundPolicy[];
    };
    getRefundPolicy(param: string, language: string): RefundPolicy;
    update(id: number, updateRefundDto: UpdateRefundPolicyDto): RefundPolicy;
    remove(id: number): string;
}
