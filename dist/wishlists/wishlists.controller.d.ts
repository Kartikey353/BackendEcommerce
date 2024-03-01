import { CreateWishlistDto } from './dto/create-wishlists.dto';
import { GetWishlistDto } from './dto/get-wishlists.dto';
import { UpdateWishlistDto } from './dto/update-wishlists.dto';
import { WishlistsService } from './wishlists.service';
export declare class WishlistsController {
    private wishlistService;
    constructor(wishlistService: WishlistsService);
    findAll(query: GetWishlistDto): {
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
        data: import("./entities/wishlist.entity").Wishlist[];
    };
    find(id: string): import("./entities/wishlist.entity").Wishlist;
    create(createWishlistDto: CreateWishlistDto): import("./entities/wishlist.entity").Wishlist;
    update(id: string, updateWishlistDto: UpdateWishlistDto): import("./entities/wishlist.entity").Wishlist;
    delete(id: string): import("./entities/wishlist.entity").Wishlist;
    toggle(CreateWishlistDto: CreateWishlistDto): any;
    inWishlist(id: string): any;
}
