import { WithdrawsService } from './withdraws.service';
import { CreateWithdrawDto } from './dto/create-withdraw.dto';
import { ApproveWithdrawDto } from './dto/approve-withdraw.dto';
import { GetWithdrawsDto, WithdrawPaginator } from './dto/get-withdraw.dto';
export declare class WithdrawsController {
    private readonly withdrawsService;
    constructor(withdrawsService: WithdrawsService);
    createWithdraw(createWithdrawDto: CreateWithdrawDto): {
        shop_id: number;
        details: string;
        amount: number;
        payment_method: string;
        note: string;
        id: number;
    };
    withdraws(query: GetWithdrawsDto): Promise<WithdrawPaginator>;
    withdraw(id: string): string;
    approveWithdraw(id: string, updateWithdrawDto: ApproveWithdrawDto): import("./entities/withdraw.entity").Withdraw;
    deleteWithdraw(id: number): string;
}
