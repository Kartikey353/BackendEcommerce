import { ImportsService } from './imports.service';
import { ImportDto } from './dto/create-import.dto';
export declare class ImportsController {
    private readonly importsService;
    constructor(importsService: ImportsService);
    importAttributes(importAttributesDto: ImportDto): boolean;
    importProducts(importProductsDto: ImportDto): boolean;
    importVariationOptions(importVariationOptionsDto: ImportDto): boolean;
}
