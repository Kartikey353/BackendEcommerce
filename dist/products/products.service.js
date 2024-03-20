"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = __importStar(require("mongoose"));
const product_entity_1 = require("./entities/product.entity");
const products_1 = require("./schema/products");
const paginate_1 = require("../common/pagination/paginate");
const products_json_1 = __importDefault(require("../db/pickbazar/products.json"));
const popular_products_json_1 = __importDefault(require("../db/pickbazar/popular-products.json"));
const best_selling_products_json_1 = __importDefault(require("../db/pickbazar/best-selling-products.json"));
const products = (0, class_transformer_1.plainToInstance)(product_entity_1.Product, products_json_1.default);
const popularProducts = (0, class_transformer_1.plainToInstance)(product_entity_1.Product, popular_products_json_1.default);
const bestSellingProducts = (0, class_transformer_1.plainToInstance)(product_entity_1.Product, best_selling_products_json_1.default);
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
let ProductsService = class ProductsService {
    constructor(Productmodel) {
        this.Productmodel = Productmodel;
        this.products = products;
        this.popularProducts = popularProducts;
        this.bestSellingProducts = bestSellingProducts;
    }
    async create(createProductDto) {
        await this.Productmodel.create(createProductDto);
    }
    async getProducts({ limit, page, search }) {
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let query = {};
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                query[key] = value;
            }
        }
        const totalProducts = await this.Productmodel.countDocuments(query);
        const documents = await this.Productmodel.find(query)
            .skip(startIndex)
            .limit(limit);
        const products = documents.map((doc) => doc.toObject());
        const url = `/products?search=${search}&limit=${limit}`;
        return Object.assign({ data: products }, (0, paginate_1.paginate)(totalProducts, page, limit, products.length, url));
    }
    async getProductByid(id) {
        const product = await this.Productmodel.findOne({ id: id }).exec();
        return product;
    }
    async getPopularProducts({ limit, type_slug }) {
        let query = {};
        if (type_slug) {
            query['type.slug'] = type_slug;
        }
        const documents = await this.Productmodel.find(query).limit(limit).exec();
        const products = documents.map((doc) => doc.toObject());
        return products;
    }
    async getBestSellingProducts({ limit, type_slug }) {
        let query = {};
        if (type_slug) {
            query['type.slug'] = type_slug;
        }
        const documents = await this.Productmodel.find(query).limit(limit).exec();
        const products = documents.map((doc) => doc.toObject());
        return products;
    }
    async updateProduct(id, updateProductDto) {
        console.log(id);
        const updatedProduct = await this.Productmodel.updateOne({ id: id }, updateProductDto);
        return updatedProduct;
    }
    async deleteProduct(id) {
        const deletedProduct = await this.Productmodel.deleteOne({ id: id });
        return deletedProduct;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(products_1.ProductModel.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map