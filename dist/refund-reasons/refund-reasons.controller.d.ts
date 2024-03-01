import { RefundReasonsService } from './refund-reasons.service';
import { CreateRefundReasonDto } from './dto/create-refund-reasons.dto';
import { GetRefundReasonDto } from './dto/get-refund-reasons.dto';
import { UpdateRefundReasonDto } from './dto/update-refund-reasons.dto';
export declare class RefundReasonsController {
    private refundReasonsService;
    constructor(refundReasonsService: RefundReasonsService);
    createRefund(createRefundReasonDto: CreateRefundReasonDto): import("./entities/refund-reasons.entity").RefundReason;
    findAll(query: GetRefundReasonDto): {
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
        data: import("./entities/refund-reasons.entity").RefundReason[];
    };
    getRefund(param: string, language: string): import("./entities/refund-reasons.entity").RefundReason;
    update(id: string, language: string, updateRefundReasonDto: UpdateRefundReasonDto): import("./entities/refund-reasons.entity").RefundReason;
    deleteRefund(id: string): string;
}
