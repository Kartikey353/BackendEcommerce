import * as mongoose from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductModel } from './schema/products';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';
export declare class ProductsService {
    private Productmodel;
    constructor(Productmodel: mongoose.Model<ProductModel>);
    private products;
    private popularProducts;
    private bestSellingProducts;
    create(createProductDto: CreateProductDto): Promise<void>;
    getProducts({ limit, page, search }: GetProductsDto): Promise<ProductPaginator>;
    getProductByid(id: number): Promise<ProductModel>;
    getPopularProducts({ limit, type_slug }: GetPopularProductsDto): Promise<Product[]>;
    getBestSellingProducts({ limit, type_slug }: GetBestSellingProductsDto): Promise<Product[]>;
    updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<mongoose.UpdateWriteOpResult>;
    deleteProduct(id: number): Promise<mongoose.mongo.DeleteResult>;
}
