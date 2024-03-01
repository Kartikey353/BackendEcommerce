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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const reviews_json_1 = __importDefault(require("../db/pickbazar/reviews.json"));
const review_entity_1 = require("./entities/review.entity");
const reviews = (0, class_transformer_1.plainToClass)(review_entity_1.Review, reviews_json_1.default);
const options = {
    keys: ['product_id'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(reviews, options);
let ReviewService = class ReviewService {
    constructor() {
        this.reviews = reviews;
    }
    findAllReviews({ limit, page, search, product_id }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.reviews;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        if (product_id) {
            data = data.filter((p) => p.product_id === Number(product_id));
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/reviews?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    findReview(id) {
        return this.reviews.find((p) => p.id === id);
    }
    create(createReviewDto) {
        return this.reviews[0];
    }
    update(id, updateReviewDto) {
        return this.reviews[0];
    }
    delete(id) {
        return this.reviews[0];
    }
};
ReviewService = __decorate([
    (0, common_1.Injectable)()
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=reviews.service.js.map