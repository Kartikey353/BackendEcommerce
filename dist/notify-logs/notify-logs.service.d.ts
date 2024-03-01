import { NotifyLogs } from './entities/notify-logs.entity';
import { GetNotifyLogsDto } from './dto/get-notify-logs.dto';
export declare class NotifyLogsService {
    private notifyLogs;
    findAllNotifyLogs({ search, limit, page }: GetNotifyLogsDto): {
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
        data: NotifyLogs[];
    };
    getNotifyLog(param: string, language: string): NotifyLogs;
    readNotifyLog(id: number): NotifyLogs;
    readAllNotifyLogs(id: number): string;
    remove(id: number): NotifyLogs;
}
