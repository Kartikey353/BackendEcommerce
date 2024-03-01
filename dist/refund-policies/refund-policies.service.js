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
exports.RefundPoliciesService = void 0;
const common_1 = require("@nestjs/common");
const refund_policies_json_1 = __importDefault(require("../db/pickbazar/refund-policies.json"));
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const refund_policies_entity_1 = require("./entities/refund-policies.entity");
const refundPolicy = (0, class_transformer_1.plainToClass)(refund_policies_entity_1.RefundPolicy, refund_policies_json_1.default);
const options = {
    keys: ['title'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(refundPolicy, options);
let RefundPoliciesService = class RefundPoliciesService {
    constructor() {
        this.refundPolicy = refundPolicy;
    }
    create(createRefundPolicyDto) {
        return this.refundPolicy[0];
    }
    findAllRefundPolicies({ search, limit, page }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.refundPolicy;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        let results = data.slice(startIndex, endIndex);
        if (results.length == 0) {
            results = this.refundPolicy.slice(0, limit);
        }
        const url = `/refund-policies?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getRefundPolicy(param, language) {
        return this.refundPolicy.find((p) => p.slug === param);
    }
    update(id, updateRefundDto) {
        return this.refundPolicy[0];
    }
    remove(id) {
        return `This action removes a #${id} refund policy`;
    }
};
RefundPoliciesService = __decorate([
    (0, common_1.Injectable)()
], RefundPoliciesService);
exports.RefundPoliciesService = RefundPoliciesService;
//# sourceMappingURL=refund-policies.service.js.map