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
exports.FaqsService = void 0;
const common_1 = require("@nestjs/common");
const faqs_json_1 = __importDefault(require("../db/pickbazar/faqs.json"));
const faq_entity_1 = require("./entities/faq.entity");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const faqs = (0, class_transformer_1.plainToClass)(faq_entity_1.Faq, faqs_json_1.default);
const options = {
    keys: ['faq_title'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(faqs, options);
let FaqsService = class FaqsService {
    constructor() {
        this.faqs = faqs;
    }
    create(createFaqDto) {
        return this.faqs[0];
    }
    findAllFaqs({ search, limit, page, shop_id }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.faqs;
        if (shop_id) {
            data = this.faqs.filter((p) => Number(p.shop_id) === Number(shop_id));
        }
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        let results = data.slice(startIndex, endIndex);
        if (results.length == 0) {
            results = this.faqs.slice(0, limit);
        }
        const url = `/faqs?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getFaq(param, language) {
        return this.faqs.find((p) => p.id === Number(param));
    }
    update(id, updateFaqDto) {
        return this.faqs[0];
    }
    remove(id) {
        return `This action removes a #${id} faq`;
    }
};
FaqsService = __decorate([
    (0, common_1.Injectable)()
], FaqsService);
exports.FaqsService = FaqsService;
//# sourceMappingURL=faqs.service.js.map