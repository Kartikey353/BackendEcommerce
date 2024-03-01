import { CreateRefundDto } from './dto/create-refund.dto';
import { UpdateRefundDto } from './dto/update-refund.dto';
export declare class RefundsService {
    create(createRefundDto: CreateRefundDto): string;
    findAll(): {
        data: any[];
    };
    findOne(id: number): string;
    update(id: number, updateRefundDto: UpdateRefundDto): string;
    remove(id: number): string;
}
