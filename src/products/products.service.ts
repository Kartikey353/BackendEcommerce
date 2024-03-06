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
import { Document } from 'mongoose';
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


  async getProducts({ limit, page, search }: GetProductsDto): Promise<ProductPaginator> {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    let query: any = {};
    if (search) {
      const parseSearchParams = search.split(';');
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        // Add search conditions to the query object
        query[key] = value;
      }
    }

    // Find products based on the query conditions
    const totalProducts = await this.Productmodel.countDocuments(query);
    const documents = await this.Productmodel.find(query)
      .skip(startIndex)
      .limit(limit);
      const products: Product[] = documents.map((doc: Document<any, any, Product>) => doc.toObject());

      const url = `/products?search=${search}&limit=${limit}`;
      return {
        data: products,
        ...paginate(totalProducts, page, limit, products.length, url),
      };
  }


//  async getProductBySlug(slug: string): Promise<ProductModel> {
//      const productSlug = await this.Productmodel.findOne({slug : slug}).exec();
//      return productSlug;
//   } 

  async getProductByid(id : number): Promise<ProductModel>{
    const product = await  this.Productmodel.findOne({id : id}).exec();
    return product;
  }

  async getPopularProducts({ limit, type_slug }: GetPopularProductsDto): Promise<Product[]> {
    let query: any = {};
    if (type_slug) {
      query['type.slug'] = type_slug; // Adjust the query based on type_slug
    }

    const documents = await this.Productmodel.find(query).limit(limit).exec();
    const products: Product[] = documents.map((doc: Document<any, any, Product>) => doc.toObject());
    return products;
  }
  async getBestSellingProducts({ limit, type_slug }: GetBestSellingProductsDto): Promise<Product[]> {
    let query: any = {};
    if (type_slug) {
      query['type.slug'] = type_slug; // Adjust the query based on type_slug
    }

    const documents = await this.Productmodel.find(query).limit(limit).exec();
    const products: Product[] = documents.map((doc: Document<any, any, Product>) => doc.toObject());
    return products;
  }
  // getProductsStock({ limit, page, search }: GetProductsDto): ProductPaginator {
  //   if (!page) page = 1;
  //   if (!limit) limit = 30;
  //   const startIndex = (page - 1) * limit;
  //   const endIndex = page * limit;

  // let query : any = {}
  //   if (search) {
  //     const parseSearchParams = search.split(';');
  //     const searchText: any = [];
  //     for (const searchParam of parseSearchParams) {
  //       const [key, value] = searchParam.split(':');
  //       // TODO: Temp Solution
  //       if (key !== 'slug') {
  //         searchText.push({
  //           [key]: value,
  //         });
  //       }
  //     }

  //     data = fuse
  //       .search({
  //         $and: searchText,
  //       })
  //       ?.map(({ item }) => item);
  //   }

  //   const results = data.slice(startIndex, endIndex);
  //   const url = `/products-stock?search=${search}&limit=${limit}`;
  //   return {
  //     data: results,
  //     ...paginate(data.length, page, limit, results.length, url),
  //   };
  // }

  // getDraftProducts({ limit, page, search }: GetProductsDto): ProductPaginator {
  //   if (!page) page = 1;
  //   if (!limit) limit = 30;
  //   const startIndex = (page - 1) * limit;
  //   const endIndex = page * limit;
  //   let data: Product[] = this.products.filter(
  //     (item) => item.status === 'draft',
  //   );

  //   if (search) {
  //     const parseSearchParams = search.split(';');
  //     const searchText: any = [];
  //     for (const searchParam of parseSearchParams) {
  //       const [key, value] = searchParam.split(':');
  //       // TODO: Temp Solution
  //       if (key !== 'slug') {
  //         searchText.push({
  //           [key]: value,
  //         });
  //       }
  //     }

  //     data = fuse
  //       .search({
  //         $and: searchText,
  //       })
  //       ?.map(({ item }) => item);
  //   }

  //   const results = data.slice(startIndex, endIndex);
  //   const url = `/draft-products?search=${search}&limit=${limit}`;
  //   return {
  //     data: results,
  //     ...paginate(data.length, page, limit, results.length, url),
  //   };
  // }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {  
    console.log(id) 
    const updatedProduct = await this.Productmodel.updateOne({id: id}, updateProductDto);
    return updatedProduct;
  }

  async deleteProduct(id: number) {
    const deletedProduct = await this.Productmodel.deleteOne({id: id});
    return deletedProduct;
  }
}
