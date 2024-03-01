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
exports.TermsAndConditionsService = void 0;
const common_1 = require("@nestjs/common");
const terms_and_conditions_json_1 = __importDefault(require("../db/pickbazar/terms-and-conditions.json"));
const terms_and_conditions_entity_1 = require("./entities/terms-and-conditions.entity");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const termsAndConditions = (0, class_transformer_1.plainToClass)(terms_and_conditions_entity_1.TermsAndConditions, terms_and_conditions_json_1.default);
const options = {
    keys: ['title'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(termsAndConditions, options);
let TermsAndConditionsService = class TermsAndConditionsService {
    constructor() {
        this.termsAndConditions = termsAndConditions;
    }
    create(createTermsAndConditionsDto) {
        return this.termsAndConditions[0];
    }
    findAllTermsAndConditions({ search, limit, page, is_approved, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.termsAndConditions;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        let results = data.slice(startIndex, endIndex);
        if (results.length == 0) {
            results = this.termsAndConditions.slice(0, limit);
        }
        const url = `/terms-and-conditions?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    findOne(param, language) {
        return this.termsAndConditions.find((p) => p.slug === String(param));
    }
    update(id, updateTermsAndConditionsDto) {
        return this.termsAndConditions[0];
    }
    remove(id) {
        return `This action removes a #${id} terms and conditions`;
    }
    disapproveTermsAndCondition(id) {
        const termsAndCondition = this.termsAndConditions.find((s) => s.id === Number(id));
        termsAndCondition.is_approved = false;
        return termsAndCondition;
    }
    approveTermsAndCondition(id) {
        const termsAndCondition = this.termsAndConditions.find((s) => s.id === Number(id));
        termsAndCondition.is_approved = true;
        return termsAndCondition;
    }
};
TermsAndConditionsService = __decorate([
    (0, common_1.Injectable)()
], TermsAndConditionsService);
exports.TermsAndConditionsService = TermsAndConditionsService;
//# sourceMappingURL=terms-and-conditions.service.js.map