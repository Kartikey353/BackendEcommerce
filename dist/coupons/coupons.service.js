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
exports.CouponsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const coupon_entity_1 = require("./entities/coupon.entity");
const coupons_json_1 = __importDefault(require("../db/pickbazar/coupons.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const coupons = (0, class_transformer_1.plainToClass)(coupon_entity_1.Coupon, coupons_json_1.default);
const options = {
    keys: ['code'],
    threshold: 0.1,
};
const fuse = new fuse_js_1.default(coupons, options);
let CouponsService = class CouponsService {
    constructor() {
        this.coupons = coupons;
    }
    create(createCouponDto) {
        return this.coupons[0];
    }
    getCoupons({ search, limit, page, shop_id }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 12;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.coupons;
        if (shop_id) {
            data = this.coupons.filter((p) => p.shop_id === Number(shop_id));
        }
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/coupons?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getCoupon(param, language) {
        return this.coupons.find((p) => p.code === param);
    }
    update(id, updateCouponDto) {
        return this.coupons[0];
    }
    remove(id) {
        return `This action removes a #${id} coupon`;
    }
    verifyCoupon(code) {
        return {
            is_valid: true,
            coupon: {
                id: 9,
                code: code,
                description: null,
                image: {
                    id: 925,
                    original: 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/925/5x2x.png',
                    thumbnail: 'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/925/conversions/5x2x-thumbnail.jpg',
                },
                type: 'fixed',
                amount: 5,
                active_from: '2021-03-28T05:46:42.000Z',
                expire_at: '2024-06-23T05:46:42.000Z',
                created_at: '2021-03-28T05:48:16.000000Z',
                updated_at: '2021-08-19T03:58:34.000000Z',
                deleted_at: null,
                is_valid: true,
            },
        };
    }
    approveCoupon(id) {
        const coupon = this.coupons.find((s) => s.id === Number(id));
        coupon.is_approve = true;
        return coupon;
    }
    disapproveCoupon(id) {
        const coupon = this.coupons.find((s) => s.id === Number(id));
        coupon.is_approve = false;
        return coupon;
    }
};
CouponsService = __decorate([
    (0, common_1.Injectable)()
], CouponsService);
exports.CouponsService = CouponsService;
//# sourceMappingURL=coupons.service.js.map