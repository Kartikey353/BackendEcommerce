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
exports.StoreNoticesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const store_notices_entity_1 = require("./entities/store-notices.entity");
const store_notices_json_1 = __importDefault(require("../db/pickbazar/store-notices.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const storeNotices = (0, class_transformer_1.plainToClass)(store_notices_entity_1.StoreNotice, store_notices_json_1.default);
const options = {
    keys: ['notice'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(storeNotices, options);
let StoreNoticesService = class StoreNoticesService {
    constructor() {
        this.storeNotices = storeNotices;
    }
    create(createStoreNoticeDto) {
        return this.storeNotices[0];
    }
    getStoreNotices({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 12;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.storeNotices;
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
        const url = `/store-notices?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getStoreNotice(param, language) {
        return this.storeNotices.find((p) => p.id === Number(param));
    }
    update(id, updateStoreNoticeDto) {
        return this.storeNotices[0];
    }
    remove(id) {
        return `This action removes a #${id} store notice`;
    }
};
StoreNoticesService = __decorate([
    (0, common_1.Injectable)()
], StoreNoticesService);
exports.StoreNoticesService = StoreNoticesService;
//# sourceMappingURL=store-notices.service.js.map