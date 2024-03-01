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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopRateProductController = exports.LowStockProductsController = exports.CategoryWiseProductController = exports.AnalyticsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const analytics_service_1 = require("./analytics.service");
let AnalyticsController = class AnalyticsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    analytics() {
        return this.analyticsService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./entities/analytics.entity").Analytics }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "analytics", null);
AnalyticsController = __decorate([
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
exports.AnalyticsController = AnalyticsController;
let CategoryWiseProductController = class CategoryWiseProductController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    analytics() {
        return this.analyticsService.findAllCategoryWiseProduct();
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/category-wise-product.entity").CategoryWiseProduct] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryWiseProductController.prototype, "analytics", null);
CategoryWiseProductController = __decorate([
    (0, common_1.Controller)('category-wise-product'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], CategoryWiseProductController);
exports.CategoryWiseProductController = CategoryWiseProductController;
let LowStockProductsController = class LowStockProductsController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    analytics() {
        return this.analyticsService.findAllLowStockProducts();
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../products/entities/product.entity").Product] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LowStockProductsController.prototype, "analytics", null);
LowStockProductsController = __decorate([
    (0, common_1.Controller)('low-stock-products'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], LowStockProductsController);
exports.LowStockProductsController = LowStockProductsController;
let TopRateProductController = class TopRateProductController {
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    analytics() {
        return this.analyticsService.findAllTopRateProduct();
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/top-rate-product.entity").TopRateProduct] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TopRateProductController.prototype, "analytics", null);
TopRateProductController = __decorate([
    (0, common_1.Controller)('top-rate-product'),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], TopRateProductController);
exports.TopRateProductController = TopRateProductController;
//# sourceMappingURL=analytics.controller.js.map