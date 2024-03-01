import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    createAddress(createAddressDto: CreateAddressDto): string;
    addresses(): string;
    address(id: string): string;
    updateAddress(id: string, updateAddressDto: UpdateAddressDto): string;
    deleteAddress(id: string): any[];
}
