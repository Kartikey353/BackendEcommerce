import { Wishlist } from './entities/wishlist.entity';
import { GetWishlistDto } from './dto/get-wishlists.dto';
import { CreateWishlistDto } from './dto/create-wishlists.dto';
import { UpdateWishlistDto } from './dto/update-wishlists.dto';
import { Product } from '../products/entities/product.entity';
export declare class MyWishlistService {
    private wishlist;
    private products;
    findAMyWishlists({ limit, page, search }: GetWishlistDto): {
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
        data: Product[];
    };
    findAMyWishlist(id: number): Wishlist;
    create(createWishlistDto: CreateWishlistDto): Wishlist;
    update(id: number, updateWishlistDto: UpdateWishlistDto): Wishlist;
    delete(id: number): Wishlist;
}
