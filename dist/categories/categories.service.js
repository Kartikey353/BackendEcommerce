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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const category_entity_1 = require("./entities/category.entity");
const fuse_js_1 = __importDefault(require("fuse.js"));
const categories_json_1 = __importDefault(require("../db/pickbazar/categories.json"));
const paginate_1 = require("../common/pagination/paginate");
const categories = (0, class_transformer_1.plainToClass)(category_entity_1.Category, categories_json_1.default);
const options = {
    keys: ['name', 'type.slug'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(categories, options);
let CategoriesService = class CategoriesService {
    constructor() {
        this.categories = categories;
    }
    create(createCategoryDto) {
        return this.categories[0];
    }
    getCategories({ limit, page, search, parent }) {
        var _a;
        if (!page)
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.categories;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        if (parent === 'null') {
            data = data.filter((item) => item.parent === null);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/categories?search=${search}&limit=${limit}&parent=${parent}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getCategory(param, language) {
        return this.categories.find((p) => p.id === Number(param) || p.slug === param);
    }
    update(id, updateCategoryDto) {
        return this.categories[0];
    }
    remove(id) {
        return `This action removes a #${id} category`;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map