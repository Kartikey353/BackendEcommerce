import { CreateWishlistDto } from './dto/create-wishlists.dto';
import { GetWishlistDto } from './dto/get-wishlists.dto';
import { UpdateWishlistDto } from './dto/update-wishlists.dto';
import { MyWishlistService } from './my-wishlists.service';
export declare class MyWishlistsController {
    private myWishlistService;
    constructor(myWishlistService: MyWishlistService);
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
        data: import("../products/entities/product.entity").Product[];
    };
    find(id: string): import("./entities/wishlist.entity").Wishlist;
    create(createWishlistDto: CreateWishlistDto): import("./entities/wishlist.entity").Wishlist;
    update(id: string, updateWishlistDto: UpdateWishlistDto): import("./entities/wishlist.entity").Wishlist;
    delete(id: string): import("./entities/wishlist.entity").Wishlist;
}
