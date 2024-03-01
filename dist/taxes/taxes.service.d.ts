import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { Tax } from './entities/tax.entity';
export declare class TaxesService {
    private taxes;
    create(createTaxDto: CreateTaxDto): Tax;
    findAll(): Tax[];
    findOne(id: number): Tax;
    update(id: number, updateTaxDto: UpdateTaxDto): Tax;
    remove(id: number): string;
}
