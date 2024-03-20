/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
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
    createProduct(createProductDto: CreateProductDto): Promise<void>;
    getProducts(query: GetProductsDto): Promise<ProductPaginator>;
    getProduct(id: string): Promise<ProductModel>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
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
