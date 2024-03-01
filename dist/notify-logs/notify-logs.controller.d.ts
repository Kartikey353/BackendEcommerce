import { NotifyLogsService } from './notify-logs.service';
import { GetNotifyLogsDto } from './dto/get-notify-logs.dto';
export declare class NotifyLogsController {
    private notifyLogsService;
    constructor(notifyLogsService: NotifyLogsService);
    findAll(query: GetNotifyLogsDto): {
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
        data: import("./entities/notify-logs.entity").NotifyLogs[];
    };
    getNotifyLog(param: string, language: string): import("./entities/notify-logs.entity").NotifyLogs;
    readNotifyLogs(id: string): import("./entities/notify-logs.entity").NotifyLogs;
    notifyLogAllRead(id: string): string;
    deleteNotifyLog(id: string): import("./entities/notify-logs.entity").NotifyLogs;
}
