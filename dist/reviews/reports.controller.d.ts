import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { AbusiveReportService } from './reports.service';
export declare class AbusiveReportsController {
    private reportService;
    constructor(reportService: AbusiveReportService);
    findAll(): Promise<string>;
    find(id: number): string;
    create(createReportDto: CreateReportDto): string;
    update(id: string, updateReportDto: UpdateReportDto): string;
    delete(id: string): string;
}
