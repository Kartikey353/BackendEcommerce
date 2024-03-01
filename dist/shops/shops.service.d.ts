import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';
import { GetShopsDto } from './dto/get-shops.dto';
import { GetStaffsDto } from './dto/get-staffs.dto';
export declare class ShopsService {
    private shops;
    private nearShops;
    create(createShopDto: CreateShopDto): Shop;
    getShops({ search, limit, page }: GetShopsDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: Shop[];
    };
    getNewShops({ search, limit, page }: GetShopsDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: Shop[];
    };
    getStaffs({ shop_id, limit, page }: GetStaffsDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: import("../users/entities/user.entity").User[];
    };
    getShop(slug: string): Shop;
    getNearByShop(lat: string, lng: string): Shop[];
    update(id: number, updateShopDto: UpdateShopDto): Shop;
    approve(id: number): string;
    remove(id: number): string;
    disapproveShop(id: number): Shop;
    approveShop(id: number): Shop;
}
