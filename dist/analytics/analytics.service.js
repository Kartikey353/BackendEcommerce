"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const analytics_json_1 = __importDefault(require("../db/pickbazar/analytics.json"));
const category_wise_product_json_1 = __importDefault(require("../db/pickbazar/category-wise-product.json"));
const low_stock_products_json_1 = __importDefault(require("../db/pickbazar/low-stock-products.json"));
const top_rate_product_json_1 = __importDefault(require("../db/pickbazar/top-rate-product.json"));
const class_transformer_1 = require("class-transformer");
const analytics_entity_1 = require("./entities/analytics.entity");
const category_wise_product_entity_1 = require("./entities/category-wise-product.entity");
const product_entity_1 = require("../products/entities/product.entity");
const top_rate_product_entity_1 = require("./entities/top-rate-product.entity");
const analytics = (0, class_transformer_1.plainToClass)(analytics_entity_1.Analytics, analytics_json_1.default);
const categoryWiseProduct = (0, class_transformer_1.plainToClass)(category_wise_product_entity_1.CategoryWiseProduct, category_wise_product_json_1.default);
const lowStockProducts = (0, class_transformer_1.plainToClass)(product_entity_1.Product, low_stock_products_json_1.default);
const topRateProduct = (0, class_transformer_1.plainToClass)(top_rate_product_entity_1.TopRateProduct, top_rate_product_json_1.default);
let AnalyticsService = class AnalyticsService {
    constructor() {
        this.analytics = analytics;
        this.categoryWiseProduct = categoryWiseProduct;
        this.lowStockProducts = lowStockProducts;
        this.topRateProduct = topRateProduct;
    }
    findAll() {
        return this.analytics;
    }
    findAllCategoryWiseProduct() {
        return this.categoryWiseProduct;
    }
    findAllLowStockProducts() {
        return this.lowStockProducts;
    }
    findAllTopRateProduct() {
        return this.topRateProduct;
    }
};
AnalyticsService = __decorate([
    (0, common_1.Injectable)()
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map