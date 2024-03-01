import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
export declare class AbusiveReportService {
    findAllReports(): string;
    findReport(id: number): string;
    create(createReportDto: CreateReportDto): string;
    update(id: number, updateReportDto: UpdateReportDto): string;
    delete(id: number): string;
}
