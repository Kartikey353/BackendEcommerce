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
exports.WishlistsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_wishlists_dto_1 = require("./dto/create-wishlists.dto");
const get_wishlists_dto_1 = require("./dto/get-wishlists.dto");
const update_wishlists_dto_1 = require("./dto/update-wishlists.dto");
const wishlists_service_1 = require("./wishlists.service");
let WishlistsController = class WishlistsController {
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
    }
    findAll(query) {
        return this.wishlistService.findAllWishlists(query);
    }
    find(id) {
        return this.wishlistService.findWishlist(+id);
    }
    create(createWishlistDto) {
        return this.wishlistService.create(createWishlistDto);
    }
    update(id, updateWishlistDto) {
        return this.wishlistService.update(+id, updateWishlistDto);
    }
    delete(id) {
        return this.wishlistService.delete(+id);
    }
    toggle(CreateWishlistDto) {
        return this.wishlistService.toggle(CreateWishlistDto);
    }
    inWishlist(id) {
        return this.wishlistService.isInWishlist(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_wishlists_dto_1.GetWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wishlists_dto_1.CreateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wishlists_dto_1.UpdateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/wishlist.entity").Wishlist }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/toggle'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wishlists_dto_1.CreateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "toggle", null);
__decorate([
    (0, common_1.Get)('/in_wishlist/:product_id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('product_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "inWishlist", null);
WishlistsController = __decorate([
    (0, common_1.Controller)('wishlists'),
    __metadata("design:paramtypes", [wishlists_service_1.WishlistsService])
], WishlistsController);
exports.WishlistsController = WishlistsController;
//# sourceMappingURL=wishlists.controller.js.map