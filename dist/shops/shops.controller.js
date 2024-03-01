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
exports.NewShopsController = exports.NearByShopController = exports.ApproveShopController = exports.DisapproveShopController = exports.StaffsController = exports.ShopsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const shops_service_1 = require("./shops.service");
const create_shop_dto_1 = require("./dto/create-shop.dto");
const update_shop_dto_1 = require("./dto/update-shop.dto");
const get_shops_dto_1 = require("./dto/get-shops.dto");
const get_staffs_dto_1 = require("./dto/get-staffs.dto");
let ShopsController = class ShopsController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    create(createShopDto) {
        return this.shopsService.create(createShopDto);
    }
    async getShops(query) {
        return this.shopsService.getShops(query);
    }
    async getShop(slug) {
        return this.shopsService.getShop(slug);
    }
    update(id, updateShopDto) {
        return this.shopsService.update(+id, updateShopDto);
    }
    remove(id) {
        return this.shopsService.remove(+id);
    }
    approveShop(id) {
        return this.shopsService.approve(+id);
    }
    disapproveShop(id) {
        return this.shopsService.approve(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_dto_1.CreateShopDto]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-shops.dto").ShopPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shops_dto_1.GetShopsDto]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "getShops", null);
__decorate([
    (0, common_1.Get)(':slug'),
    openapi.ApiResponse({ status: 200, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShopsController.prototype, "getShop", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shop_dto_1.UpdateShopDto]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('approve'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "approveShop", null);
__decorate([
    (0, common_1.Post)('disapprove'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShopsController.prototype, "disapproveShop", null);
ShopsController = __decorate([
    (0, common_1.Controller)('shops'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ShopsController);
exports.ShopsController = ShopsController;
let StaffsController = class StaffsController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    create(createShopDto) {
        return this.shopsService.create(createShopDto);
    }
    async getStaffs(query) {
        return this.shopsService.getStaffs(query);
    }
    async getShop(slug) {
        return this.shopsService.getShop(slug);
    }
    update(id, updateShopDto) {
        return this.shopsService.update(+id, updateShopDto);
    }
    remove(id) {
        return this.shopsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shop_dto_1.CreateShopDto]),
    __metadata("design:returntype", void 0)
], StaffsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("../users/dto/get-users.dto").UserPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_staffs_dto_1.GetStaffsDto]),
    __metadata("design:returntype", Promise)
], StaffsController.prototype, "getStaffs", null);
__decorate([
    (0, common_1.Get)(':slug'),
    openapi.ApiResponse({ status: 200, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffsController.prototype, "getShop", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shop_dto_1.UpdateShopDto]),
    __metadata("design:returntype", void 0)
], StaffsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaffsController.prototype, "remove", null);
StaffsController = __decorate([
    (0, common_1.Controller)('staffs'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], StaffsController);
exports.StaffsController = StaffsController;
let DisapproveShopController = class DisapproveShopController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    async disapproveShop(id) {
        return this.shopsService.disapproveShop(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DisapproveShopController.prototype, "disapproveShop", null);
DisapproveShopController = __decorate([
    (0, common_1.Controller)('disapprove-shop'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], DisapproveShopController);
exports.DisapproveShopController = DisapproveShopController;
let ApproveShopController = class ApproveShopController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    async approveShop(id) {
        return this.shopsService.approveShop(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/shop.entity").Shop }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApproveShopController.prototype, "approveShop", null);
ApproveShopController = __decorate([
    (0, common_1.Controller)('approve-shop'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], ApproveShopController);
exports.ApproveShopController = ApproveShopController;
let NearByShopController = class NearByShopController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    async getNearByShop(lat, lng) {
        return this.shopsService.getNearByShop(lat, lng);
    }
};
__decorate([
    (0, common_1.Get)(':lat/:lng'),
    openapi.ApiResponse({ status: 200, type: [require("./entities/shop.entity").Shop] }),
    __param(0, (0, common_1.Param)('lat')),
    __param(1, (0, common_1.Param)('lng')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NearByShopController.prototype, "getNearByShop", null);
NearByShopController = __decorate([
    (0, common_1.Controller)('near-by-shop'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], NearByShopController);
exports.NearByShopController = NearByShopController;
let NewShopsController = class NewShopsController {
    constructor(shopsService) {
        this.shopsService = shopsService;
    }
    async getNewShops(query) {
        return this.shopsService.getNewShops(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-shops.dto").ShopPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shops_dto_1.GetShopsDto]),
    __metadata("design:returntype", Promise)
], NewShopsController.prototype, "getNewShops", null);
NewShopsController = __decorate([
    (0, common_1.Controller)('new-shops'),
    __metadata("design:paramtypes", [shops_service_1.ShopsService])
], NewShopsController);
exports.NewShopsController = NewShopsController;
//# sourceMappingURL=shops.controller.js.map