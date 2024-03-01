import { ImportDto } from './dto/create-import.dto';
export declare class ImportsService {
    create(createImportDto: ImportDto): string;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
