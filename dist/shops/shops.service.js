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
exports.ShopsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const shop_entity_1 = require("./entities/shop.entity");
const shops_json_1 = __importDefault(require("../db/pickbazar/shops.json"));
const near_shop_json_1 = __importDefault(require("../db/pickbazar/near-shop.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const shops = (0, class_transformer_1.plainToClass)(shop_entity_1.Shop, shops_json_1.default);
const nearShops = (0, class_transformer_1.plainToClass)(shop_entity_1.Shop, near_shop_json_1.default);
const options = {
    keys: ['name', 'type.slug', 'is_active'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(shops, options);
let ShopsService = class ShopsService {
    constructor() {
        this.shops = shops;
        this.nearShops = shops;
    }
    create(createShopDto) {
        return this.shops[0];
    }
    getShops({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.shops;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/shops?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getNewShops({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.shops.filter((shopItem) => Boolean(shopItem.is_active) === false);
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/new-shops?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getStaffs({ shop_id, limit, page }) {
        var _a, _b;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let staffs = [];
        if (shop_id) {
            staffs = (_b = (_a = this.shops.find((p) => p.id === Number(shop_id))) === null || _a === void 0 ? void 0 : _a.staffs) !== null && _b !== void 0 ? _b : [];
        }
        const results = staffs === null || staffs === void 0 ? void 0 : staffs.slice(startIndex, endIndex);
        const url = `/staffs?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(staffs === null || staffs === void 0 ? void 0 : staffs.length, page, limit, results === null || results === void 0 ? void 0 : results.length, url));
    }
    getShop(slug) {
        return this.shops.find((p) => p.slug === slug);
    }
    getNearByShop(lat, lng) {
        return nearShops;
    }
    update(id, updateShopDto) {
        return this.shops[0];
    }
    approve(id) {
        return `This action removes a #${id} shop`;
    }
    remove(id) {
        return `This action removes a #${id} shop`;
    }
    disapproveShop(id) {
        const shop = this.shops.find((s) => s.id === Number(id));
        shop.is_active = false;
        return shop;
    }
    approveShop(id) {
        const shop = this.shops.find((s) => s.id === Number(id));
        shop.is_active = true;
        return shop;
    }
};
ShopsService = __decorate([
    (0, common_1.Injectable)()
], ShopsService);
exports.ShopsService = ShopsService;
//# sourceMappingURL=shops.service.js.map