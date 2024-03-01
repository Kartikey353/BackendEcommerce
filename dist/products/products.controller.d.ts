import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { Product } from './entities/product.entity';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';
import { ProductModel } from './schema/products';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductDto: CreateProductDto): any;
    getProducts(query: GetProductsDto): Promise<ProductPaginator>;
    getProduct(): Promise<ProductModel[]>;
    getProductBySlug(slug: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Product;
    remove(id: string): string;
}
export declare class PopularProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(query: GetPopularProductsDto): Promise<Product[]>;
}
export declare class BestSellingProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(query: GetBestSellingProductsDto): Promise<Product[]>;
}
export declare class DraftProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(query: GetProductsDto): Promise<ProductPaginator>;
}
export declare class ProductsStockController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(query: GetProductsDto): Promise<ProductPaginator>;
}
