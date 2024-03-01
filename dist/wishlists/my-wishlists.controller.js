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
exports.MyWishlistsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_wishlists_dto_1 = require("./dto/create-wishlists.dto");
const get_wishlists_dto_1 = require("./dto/get-wishlists.dto");
const update_wishlists_dto_1 = require("./dto/update-wishlists.dto");
const my_wishlists_service_1 = require("./my-wishlists.service");
let MyWishlistsController = class MyWishlistsController {
    constructor(myWishlistService) {
        this.myWishlistService = myWishlistService;
    }
    findAll(query) {
        return this.myWishlistService.findAMyWishlists(query);
    }
    find(id) {
        return this.myWishlistService.findAMyWishlist(+id);
    }
    create(createWishlistDto) {
        return this.myWishlistService.create(createWishlistDto);
    }
    update(id, updateWishlistDto) {
        return this.myWishlistService.update(+id, updateWishlistDto);
    }
    delete(id) {
        return this.myWishlistService.delete(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_wishlists_dto_1.GetWishlistDto]),
    __metadata("design:returntype", void 0)
], MyWishlistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyWishlistsController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wishlists_dto_1.CreateWishlistDto]),
    __metadata("design:returntype", void 0)
], MyWishlistsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wishlists_dto_1.UpdateWishlistDto]),
    __metadata("design:returntype", void 0)
], MyWishlistsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyWishlistsController.prototype, "delete", null);
MyWishlistsController = __decorate([
    (0, common_1.Controller)('my-wishlists'),
    __metadata("design:paramtypes", [my_wishlists_service_1.MyWishlistService])
], MyWishlistsController);
exports.MyWishlistsController = MyWishlistsController;
//# sourceMappingURL=my-wishlists.controller.js.map