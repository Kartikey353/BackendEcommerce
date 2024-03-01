import { Address } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Profile } from './profile.entity';
export declare class User extends CoreEntity {
    name: string;
    email: string;
    password?: string;
    profile?: Profile;
    shops?: Shop[];
    managed_shop?: Shop;
    is_active?: boolean;
    address?: Address[];
    permissions?: Permission[];
    wallet?: any;
}
export declare class Permission extends CoreEntity {
    name?: string;
    guard_name?: string;
    pivot?: any;
}
