import { RefundPoliciesService } from './refund-policies.service';
import { CreateRefundPolicyDto } from './dto/create-refund-policy.dto';
import { GetRefundPolicyDto } from './dto/get-refund-policies.dto';
import { UpdateRefundPolicyDto } from './dto/update-refund-policy.dto';
export declare class RefundPoliciesController {
    private refundPoliciesService;
    constructor(refundPoliciesService: RefundPoliciesService);
    createRefund(createRefundPolicyDto: CreateRefundPolicyDto): import("./entities/refund-policies.entity").RefundPolicy;
    findAll(query: GetRefundPolicyDto): {
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
        data: import("./entities/refund-policies.entity").RefundPolicy[];
    };
    getRefund(param: string, language: string): import("./entities/refund-policies.entity").RefundPolicy;
    update(id: string, language: string, updateRefundDto: UpdateRefundPolicyDto): import("./entities/refund-policies.entity").RefundPolicy;
    deleteRefund(id: string): string;
}
