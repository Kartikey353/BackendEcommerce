import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import {
  ProductsController,
  PopularProductsController,
  // ProductsStockController,
  // DraftProductsController,
  BestSellingProductsController,
} from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/products';
import { ProductModel } from './schema/products';

@Module({
  controllers: [
    ProductsController,
    PopularProductsController,
    BestSellingProductsController,
    // ProductsStockController,
    // DraftProductsController,
  ], 
  imports:[MongooseModule.forFeature([{name:ProductModel.name,schema:ProductSchema}])],
  providers: [ProductsService],
})
export class ProductsModule {}
