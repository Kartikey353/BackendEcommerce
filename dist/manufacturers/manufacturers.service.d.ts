import { Manufacturer } from './entities/manufacturer.entity';
import { GetTopManufacturersDto } from './dto/get-top-manufacturers.dto';
import { GetManufacturersDto, ManufacturerPaginator } from './dto/get-manufactures.dto';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
export declare class ManufacturersService {
    private manufacturers;
    create(createManufactureDto: CreateManufacturerDto): Manufacturer;
    getManufactures({ limit, page, search, }: GetManufacturersDto): Promise<ManufacturerPaginator>;
    getTopManufactures({ limit, }: GetTopManufacturersDto): Promise<Manufacturer[]>;
    getManufacturesBySlug(slug: string): Promise<Manufacturer>;
    update(id: number, updateManufacturesDto: UpdateManufacturerDto): Manufacturer;
    remove(id: number): string;
}
