import { ManufacturersService } from './manufacturers.service';
import { GetTopManufacturersDto } from './dto/get-top-manufacturers.dto';
import { Manufacturer } from './entities/manufacturer.entity';
import { GetManufacturersDto, ManufacturerPaginator } from './dto/get-manufactures.dto';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
export declare class ManufacturersController {
    private readonly manufacturersService;
    constructor(manufacturersService: ManufacturersService);
    createProduct(createManufactureDto: CreateManufacturerDto): Manufacturer;
    getManufactures(query: GetManufacturersDto): Promise<ManufacturerPaginator>;
    getManufactureBySlug(slug: string): Promise<Manufacturer>;
    update(id: string, updateManufacturerDto: UpdateManufacturerDto): Manufacturer;
    remove(id: string): string;
}
export declare class TopManufacturersController {
    private readonly manufacturersService;
    constructor(manufacturersService: ManufacturersService);
    getTopManufactures(query: GetTopManufacturersDto): Promise<Manufacturer[]>;
}
