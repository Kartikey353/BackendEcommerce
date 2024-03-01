import { Wishlist } from './entities/wishlist.entity';
import { GetWishlistDto } from './dto/get-wishlists.dto';
import { CreateWishlistDto } from './dto/create-wishlists.dto';
import { UpdateWishlistDto } from './dto/update-wishlists.dto';
export declare class WishlistsService {
    private wishlist;
    private products;
    findAllWishlists({ limit, page, search }: GetWishlistDto): {
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
        data: Wishlist[];
    };
    findWishlist(id: number): Wishlist;
    create(createWishlistDto: CreateWishlistDto): Wishlist;
    update(id: number, updateWishlistDto: UpdateWishlistDto): Wishlist;
    delete(id: number): Wishlist;
    isInWishlist(product_id: number): any;
    toggle({ product_id }: CreateWishlistDto): any;
}
