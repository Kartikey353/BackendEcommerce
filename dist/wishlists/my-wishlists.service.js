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
exports.MyWishlistService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const wishlist_entity_1 = require("./entities/wishlist.entity");
const wishlists_json_1 = __importDefault(require("../db/pickbazar/wishlists.json"));
const product_entity_1 = require("../products/entities/product.entity");
const products_json_1 = __importDefault(require("../db/pickbazar/products.json"));
const products = (0, class_transformer_1.plainToClass)(product_entity_1.Product, products_json_1.default);
const wishlists = (0, class_transformer_1.plainToClass)(wishlist_entity_1.Wishlist, wishlists_json_1.default);
const options = {
    keys: ['answer'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(wishlists, options);
let MyWishlistService = class MyWishlistService {
    constructor() {
        this.wishlist = wishlists;
        this.products = products;
    }
    findAMyWishlists({ limit, page, search }) {
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const data = this.products.slice(1, 7);
        const results = data.slice(startIndex, endIndex);
        const url = `/my-wishlists?with=shop&orderBy=created_at&sortedBy=desc`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    findAMyWishlist(id) {
        return this.wishlist.find((p) => p.id === id);
    }
    create(createWishlistDto) {
        return this.wishlist[0];
    }
    update(id, updateWishlistDto) {
        return this.wishlist[0];
    }
    delete(id) {
        return this.wishlist[0];
    }
};
MyWishlistService = __decorate([
    (0, common_1.Injectable)()
], MyWishlistService);
exports.MyWishlistService = MyWishlistService;
//# sourceMappingURL=my-wishlists.service.js.map