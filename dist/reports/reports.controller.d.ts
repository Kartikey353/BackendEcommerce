import { ReportsService } from './reports.service';
export declare class ReportsController {
    private myReportService;
    constructor(myReportService: ReportsService);
    findAll(): {
        data: import("./entities/report.entity").MyReports[];
    };
}
