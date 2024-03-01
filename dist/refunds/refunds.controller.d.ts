import { RefundsService } from './refunds.service';
import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
export declare class RefundsController {
    private readonly refundsService;
    constructor(refundsService: RefundsService);
    create(createRefundDto: CreateRefundDto): string;
    findAll(): {
        data: any[];
    };
    findOne(id: string): string;
    update(id: string, updateRefundDto: UpdateRefundDto): string;
    remove(id: string): string;
}
