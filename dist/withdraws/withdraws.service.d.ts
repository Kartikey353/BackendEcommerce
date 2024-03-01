import { CreateWithdrawDto } from './dto/create-withdraw.dto';
import { ApproveWithdrawDto } from './dto/approve-withdraw.dto';
import { Withdraw } from './entities/withdraw.entity';
import { GetWithdrawsDto, WithdrawPaginator } from './dto/get-withdraw.dto';
export declare class WithdrawsService {
    private withdraws;
    create(createWithdrawDto: CreateWithdrawDto): {
        shop_id: number;
        details: string;
        amount: number;
        payment_method: string;
        note: string;
        id: number;
    };
    getWithdraws({ limit, page, status, shop_id, }: GetWithdrawsDto): WithdrawPaginator;
    findOne(id: number): string;
    update(id: number, updateWithdrawDto: ApproveWithdrawDto): Withdraw;
    remove(id: number): string;
}
