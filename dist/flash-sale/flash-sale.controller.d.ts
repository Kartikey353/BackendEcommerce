import { FlashSaleService } from './flash-sale.service';
import { GetFlashSaleDto } from './dto/get-flash-sales.dto';
import { CreateFlashSaleDto } from './dto/create-flash-sale.dto';
import { UpdateFlashSaleDto } from './dto/update-flash-sale.dto';
export declare class FlashSaleController {
    private flashSaleService;
    constructor(flashSaleService: FlashSaleService);
    createFlashSale(createFlashSaleDto: CreateFlashSaleDto): import("./entities/flash-sale.entity").FlashSale;
    findAll(query: GetFlashSaleDto): {
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
        data: import("./entities/flash-sale.entity").FlashSale[];
    };
    getFlashSale(param: string, language: string): import("./entities/flash-sale.entity").FlashSale;
    update(id: string, language: string, updateFlashSaleDto: UpdateFlashSaleDto): import("./entities/flash-sale.entity").FlashSale;
    deleteFlashSale(id: string): string;
}
export declare class ProductsByFlashSaleController {
    private flashSaleService;
    constructor(flashSaleService: FlashSaleService);
    findAll(query: GetFlashSaleDto): {
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
}
