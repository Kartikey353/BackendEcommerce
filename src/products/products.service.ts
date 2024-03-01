import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { InjectModel } from '@nestjs/mongoose'; 
import * as mongoose from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity'; 
import { ProductSchema,ProductModel } from './schema/products';
import { paginate } from 'src/common/pagination/paginate';
import productsJson from '@db/products.json';
import popularProductsJson from '@db/popular-products.json';
import bestSellingProductsJson from '@db/best-selling-products.json';
import Fuse from 'fuse.js';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';

const products = plainToInstance(Product, productsJson);
const popularProducts = plainToInstance(Product, popularProductsJson);
const bestSellingProducts = plainToInstance(Product, bestSellingProductsJson);

const options = {
  keys: [
    'name',
    'type.slug',
    'categories.slug',
    'status',
    'shop_id',
    'author.slug',
    'tags',
    'manufacturer.slug',
  ],
  threshold: 0.3,
};
const fuse = new Fuse(products, options);

@Injectable()
export class ProductsService { 
  
  constructor(
   @InjectModel(ProductModel.name)
    private Productmodel: mongoose.Model<ProductModel>
  ){}
  private products: any = products;
  private popularProducts: any = popularProducts;
  private bestSellingProducts: any = bestSellingProducts;

  create(createProductDto: CreateProductDto) {
    return this.products[0];
  }

  getProducts({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products;
    if (search) {
      const parseSearchParams = search.split(';');
      const searchText: any = [];
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // TODO: Temp Solution
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
      } 
      data = fuse
        .search({
          $and: searchText,
        })
        ?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/products?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  getProductBySlug(slug: string): Product {
    const product = this.products.find((p) => p.slug === slug);
    const related_products = this.products
      .filter((p) => p.type.slug === product.type.slug)
      .slice(0, 20);
    return {
      ...product,
      related_products,
    };
  } 

  async getProduct(): Promise<ProductModel[]>{
    const res = this.Productmodel.find();
    return res;
  }

  getPopularProducts({ limit, type_slug }: GetPopularProductsDto): Product[] {
    let data: any = this.popularProducts;
    if (type_slug) {
      data = fuse.search(type_slug)?.map(({ item }) => item);
    } 
    return data?.slice(0, limit);
  }
  getBestSellingProducts({ limit, type_slug }: GetBestSellingProductsDto): Product[] {
    let data: any = this.bestSellingProducts;
    if (type_slug) {
      data = fuse.search(type_slug)?.map(({ item }) => item);
    }
    return data?.slice(0, limit);
  }

  getProductsStock({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products.filter((item) => item.quantity <= 9);

    if (search) {
      const parseSearchParams = search.split(';');
      const searchText: any = [];
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // TODO: Temp Solution
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
      }

      data = fuse
        .search({
          $and: searchText,
        })
        ?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/products-stock?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  getDraftProducts({ limit, page, search }: GetProductsDto): ProductPaginator {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Product[] = this.products.filter(
      (item) => item.status === 'draft',
    );

    if (search) {
      const parseSearchParams = search.split(';');
      const searchText: any = [];
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // TODO: Temp Solution
        if (key !== 'slug') {
          searchText.push({
            [key]: value,
          });
        }
      }

      data = fuse
        .search({
          $and: searchText,
        })
        ?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/draft-products?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  update(id: number, updateProductDto: UpdateProductDto) {   
    // productsJson[0] 
    // productsJson[id].name = updateProductDto.name; 
    // productsJson[id].description = updateProductDto.description;
    // // productsJson[id].in_stock = updateProductDto.in_stock;
    // productsJson[id].quantity = updateProductDto.quantity;
    // productsJson[id].status = updateProductDto.status; 
    // // productsJson[0].image = updateProductDto.image;
    // productsJson[id].sale_price = updateProductDto.sale_price;
    // return productsJson[id]; 
    return products[0];
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
