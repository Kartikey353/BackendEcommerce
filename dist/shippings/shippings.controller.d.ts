import { ShippingsService } from './shippings.service';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { GetShippingsDto } from './dto/get-shippings.dto';
export declare class ShippingsController {
    private readonly shippingsService;
    constructor(shippingsService: ShippingsService);
    create(createShippingDto: CreateShippingDto): import("./entities/shipping.entity").Shipping;
    findAll(query: GetShippingsDto): import("./entities/shipping.entity").Shipping[];
    findOne(id: string): import("./entities/shipping.entity").Shipping;
    update(id: string, updateShippingDto: UpdateShippingDto): import("./entities/shipping.entity").Shipping;
    remove(id: string): string;
}
