import { CreateAddressDto } from 'src/addresses/dto/create-address.dto';
import { User } from '../entities/user.entity';
import { CreateProfileDto } from './create-profile.dto';
declare enum Permission {
    SUPER_ADMIN = "Super admin",
    STORE_OWNER = "Store owner",
    STAFF = "Staff",
    CUSTOMER = "Customer"
}
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<User, "name" | "email" | "password">>;
export declare class CreateUserDto extends CreateUserDto_base {
    address: CreateAddressDto[];
    profile: CreateProfileDto;
    permission: Permission;
}
export {};
