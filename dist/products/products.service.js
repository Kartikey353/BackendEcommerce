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
const fuse_js_1 = __importDefault(require("fuse.js"));
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
const fuse = new fuse_js_1.default(products, options);
let ProductsService = class ProductsService {
    constructor(Productmodel) {
        this.Productmodel = Productmodel;
        this.products = products;
        this.popularProducts = popularProducts;
        this.bestSellingProducts = bestSellingProducts;
    }
    create(createProductDto) {
        return this.products[0];
    }
    getProducts({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products;
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/products?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getProductBySlug(slug) {
        const product = this.products.find((p) => p.slug === slug);
        const related_products = this.products
            .filter((p) => p.type.slug === product.type.slug)
            .slice(0, 20);
        return Object.assign(Object.assign({}, product), { related_products });
    }
    async getProduct() {
        const res = this.Productmodel.find();
        return res;
    }
    getPopularProducts({ limit, type_slug }) {
        var _a;
        let data = this.popularProducts;
        if (type_slug) {
            data = (_a = fuse.search(type_slug)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        return data === null || data === void 0 ? void 0 : data.slice(0, limit);
    }
    getBestSellingProducts({ limit, type_slug }) {
        var _a;
        let data = this.bestSellingProducts;
        if (type_slug) {
            data = (_a = fuse.search(type_slug)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        return data === null || data === void 0 ? void 0 : data.slice(0, limit);
    }
    getProductsStock({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products.filter((item) => item.quantity <= 9);
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/products-stock?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getDraftProducts({ limit, page, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.products.filter((item) => item.status === 'draft');
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/draft-products?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    update(id, updateProductDto) {
        return products[0];
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(products_1.ProductModel.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map