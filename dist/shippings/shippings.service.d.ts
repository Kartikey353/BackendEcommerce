import { CreateShippingDto } from './dto/create-shipping.dto';
import { GetShippingsDto } from './dto/get-shippings.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { Shipping } from './entities/shipping.entity';
export declare class ShippingsService {
    private shippings;
    create(createShippingDto: CreateShippingDto): Shipping;
    getShippings({}: GetShippingsDto): Shipping[];
    findOne(id: number): Shipping;
    update(id: number, updateShippingDto: UpdateShippingDto): Shipping;
    remove(id: number): string;
}
