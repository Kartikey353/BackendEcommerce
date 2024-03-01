"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsStockController = exports.DraftProductsController = exports.BestSellingProductsController = exports.PopularProductsController = exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const get_products_dto_1 = require("./dto/get-products.dto");
const get_popular_products_dto_1 = require("./dto/get-popular-products.dto");
const get_best_selling_products_dto_1 = require("./dto/get-best-selling-products.dto");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    createProduct(createProductDto) {
        return this.productsService.create(createProductDto);
    }
    async getProducts(query) {
        return this.productsService.getProducts(query);
    }
    async getProduct() {
        return this.productsService.getProduct();
    }
    async getProductBySlug(slug) {
        return this.productsService.getProductBySlug(slug);
    }
    update(id, updateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }
    remove(id) {
        return this.productsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-products.dto").ProductPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_products_dto_1.GetProductsDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)("single"),
    openapi.ApiResponse({ status: 200, type: [require("./schema/products").ProductModel] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)(':slug'),
    openapi.ApiResponse({ status: 200, type: require("./entities/product.entity").Product }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductBySlug", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/product.entity").Product }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
let PopularProductsController = class PopularProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts(query) {
        return this.productsService.getPopularProducts(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/product.entity").Product] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_popular_products_dto_1.GetPopularProductsDto]),
    __metadata("design:returntype", Promise)
], PopularProductsController.prototype, "getProducts", null);
PopularProductsController = __decorate([
    (0, common_1.Controller)('popular-products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], PopularProductsController);
exports.PopularProductsController = PopularProductsController;
let BestSellingProductsController = class BestSellingProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts(query) {
        return this.productsService.getBestSellingProducts(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/product.entity").Product] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_best_selling_products_dto_1.GetBestSellingProductsDto]),
    __metadata("design:returntype", Promise)
], BestSellingProductsController.prototype, "getProducts", null);
BestSellingProductsController = __decorate([
    (0, common_1.Controller)('best-selling-products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], BestSellingProductsController);
exports.BestSellingProductsController = BestSellingProductsController;
let DraftProductsController = class DraftProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts(query) {
        return this.productsService.getDraftProducts(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-products.dto").ProductPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_products_dto_1.GetProductsDto]),
    __metadata("design:returntype", Promise)
], DraftProductsController.prototype, "getProducts", null);
DraftProductsController = __decorate([
    (0, common_1.Controller)('draft-products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], DraftProductsController);
exports.DraftProductsController = DraftProductsController;
let ProductsStockController = class ProductsStockController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async getProducts(query) {
        return this.productsService.getProductsStock(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-products.dto").ProductPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_products_dto_1.GetProductsDto]),
    __metadata("design:returntype", Promise)
], ProductsStockController.prototype, "getProducts", null);
ProductsStockController = __decorate([
    (0, common_1.Controller)('products-stock'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsStockController);
exports.ProductsStockController = ProductsStockController;
//# sourceMappingURL=products.controller.js.map