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
exports.ProductsByFlashSaleController = exports.FlashSaleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const flash_sale_service_1 = require("./flash-sale.service");
const get_flash_sales_dto_1 = require("./dto/get-flash-sales.dto");
const create_flash_sale_dto_1 = require("./dto/create-flash-sale.dto");
const update_flash_sale_dto_1 = require("./dto/update-flash-sale.dto");
let FlashSaleController = class FlashSaleController {
    constructor(flashSaleService) {
        this.flashSaleService = flashSaleService;
    }
    createFlashSale(createFlashSaleDto) {
        return this.flashSaleService.create(createFlashSaleDto);
    }
    findAll(query) {
        return this.flashSaleService.findAllFlashSale(query);
    }
    getFlashSale(param, language) {
        return this.flashSaleService.getFlashSale(param, language);
    }
    update(id, language, updateFlashSaleDto) {
        return this.flashSaleService.update(+id, updateFlashSaleDto);
    }
    deleteFlashSale(id) {
        return this.flashSaleService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/flash-sale.entity").FlashSale }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flash_sale_dto_1.CreateFlashSaleDto]),
    __metadata("design:returntype", void 0)
], FlashSaleController.prototype, "createFlashSale", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_flash_sales_dto_1.GetFlashSaleDto]),
    __metadata("design:returntype", void 0)
], FlashSaleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flash-sale.entity").FlashSale }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FlashSaleController.prototype, "getFlashSale", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/flash-sale.entity").FlashSale }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('language')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_flash_sale_dto_1.UpdateFlashSaleDto]),
    __metadata("design:returntype", void 0)
], FlashSaleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlashSaleController.prototype, "deleteFlashSale", null);
FlashSaleController = __decorate([
    (0, common_1.Controller)('flash-sale'),
    __metadata("design:paramtypes", [flash_sale_service_1.FlashSaleService])
], FlashSaleController);
exports.FlashSaleController = FlashSaleController;
let ProductsByFlashSaleController = class ProductsByFlashSaleController {
    constructor(flashSaleService) {
        this.flashSaleService = flashSaleService;
    }
    findAll(query) {
        return this.flashSaleService.findAllProductsByFlashSale(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_flash_sales_dto_1.GetFlashSaleDto]),
    __metadata("design:returntype", void 0)
], ProductsByFlashSaleController.prototype, "findAll", null);
ProductsByFlashSaleController = __decorate([
    (0, common_1.Controller)('products-by-flash-sale'),
    __metadata("design:paramtypes", [flash_sale_service_1.FlashSaleService])
], ProductsByFlashSaleController);
exports.ProductsByFlashSaleController = ProductsByFlashSaleController;
//# sourceMappingURL=flash-sale.controller.js.map