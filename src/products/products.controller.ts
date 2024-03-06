import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { Product } from './entities/product.entity';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
import { GetBestSellingProductsDto } from './dto/get-best-selling-products.dto';
import { ProductModel } from './schema/products';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async getProducts(@Query() query: GetProductsDto): Promise<ProductPaginator> {
    return this.productsService.getProducts(query);
  } 

  @Get(":id") 
  async getProduct(@Param('id') id : string) : Promise<ProductModel>{
    return this.productsService.getProductByid(+id)
  }

  // @Get(':slug')
  // async getProductBySlug(@Param('slug') slug: string): Promise<ProductModel> {
  //   return this.productsService.getProductBySlug(slug);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    console.log(updateProductDto)
    return this.productsService.updateProduct(+id, updateProductDto);
  } 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.deleteProduct(+id);
  }
}

@Controller('popular-products')
export class PopularProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getProducts(@Query() query: GetPopularProductsDto): Promise<Product[]> {
    return this.productsService.getPopularProducts(query);
  }
}
@Controller('best-selling-products')
export class BestSellingProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getProducts(@Query() query: GetBestSellingProductsDto): Promise<Product[]> {
    return this.productsService.getBestSellingProducts(query);
  }
}

// @Controller('draft-products')
// export class DraftProductsController {
//   constructor(private readonly productsService: ProductsService) {}
//   @Get()
//   async getProducts(@Query() query: GetProductsDto): Promise<ProductPaginator> {
//     return this.productsService.getDraftProducts(query);
//   }
// }

// @Controller('products-stock')
// export class ProductsStockController {
//   constructor(private readonly productsService: ProductsService) {}
//   @Get()
//   async getProducts(@Query() query: GetProductsDto): Promise<ProductPaginator> {
//     return this.productsService.getProductsStock(query);
//   }
// }
