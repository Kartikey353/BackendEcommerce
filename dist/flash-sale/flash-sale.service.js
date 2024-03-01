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
exports.FlashSaleService = void 0;
const common_1 = require("@nestjs/common");
const flash_sale_json_1 = __importDefault(require("../db/pickbazar/flash-sale.json"));
const products_by_flash_sale_json_1 = __importDefault(require("../db/pickbazar/products-by-flash-sale.json"));
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const flash_sale_entity_1 = require("./entities/flash-sale.entity");
const product_entity_1 = require("../products/entities/product.entity");
const flashSale = (0, class_transformer_1.plainToClass)(flash_sale_entity_1.FlashSale, flash_sale_json_1.default);
const options = {
    keys: ['title'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(flashSale, options);
const productsByFlashSale = (0, class_transformer_1.plainToClass)(product_entity_1.Product, products_by_flash_sale_json_1.default);
const productsByFlashSaleOptions = {
    keys: ['name'],
    threshold: 0.3,
};
const productsByFlashSaleFuse = new fuse_js_1.default(productsByFlashSale, productsByFlashSaleOptions);
let FlashSaleService = class FlashSaleService {
    constructor() {
        this.flashSale = flashSale;
        this.productsByFlashSale = productsByFlashSale;
    }
    create(createFlashSaleDto) {
        return this.flashSale[0];
    }
    findAllFlashSale({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.flashSale;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/flash-sale?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getFlashSale(param, language) {
        return this.flashSale.find((p) => p.slug === param);
    }
    update(id, updateFlashSaleDto) {
        return this.flashSale[0];
    }
    remove(id) {
        return `This action removes a #${id} Flash Sale`;
    }
    findAllProductsByFlashSale({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let productsByData = this.productsByFlashSale;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                productsByData = (_a = productsByFlashSaleFuse
                    .search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = productsByData.slice(startIndex, endIndex);
        const url = `/products-by-flash-sale?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(productsByData.length, page, limit, results.length, url));
    }
};
FlashSaleService = __decorate([
    (0, common_1.Injectable)()
], FlashSaleService);
exports.FlashSaleService = FlashSaleService;
//# sourceMappingURL=flash-sale.service.js.map