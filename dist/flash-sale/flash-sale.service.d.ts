import { FlashSale } from './entities/flash-sale.entity';
import { GetFlashSaleDto } from './dto/get-flash-sales.dto';
import { CreateFlashSaleDto } from './dto/create-flash-sale.dto';
import { UpdateFlashSaleDto } from './dto/update-flash-sale.dto';
import { Product } from 'src/products/entities/product.entity';
export declare class FlashSaleService {
    private flashSale;
    private productsByFlashSale;
    create(createFlashSaleDto: CreateFlashSaleDto): FlashSale;
    findAllFlashSale({ search, limit, page }: GetFlashSaleDto): {
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
        data: FlashSale[];
    };
    getFlashSale(param: string, language: string): FlashSale;
    update(id: number, updateFlashSaleDto: UpdateFlashSaleDto): FlashSale;
    remove(id: number): string;
    findAllProductsByFlashSale({ search, limit, page }: GetFlashSaleDto): {
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
}
