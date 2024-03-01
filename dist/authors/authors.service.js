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
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const authors_json_1 = __importDefault(require("../db/pickbazar/authors.json"));
const author_entity_1 = require("./entities/author.entity");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const authors = (0, class_transformer_1.plainToClass)(author_entity_1.Author, authors_json_1.default);
const options = {
    keys: ['name', 'slug'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(authors, options);
let AuthorsService = class AuthorsService {
    constructor() {
        this.authors = authors;
    }
    create(createAuthorDto) {
        return this.authors[0];
    }
    getAuthors({ page, limit, search }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.authors;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/authors?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getAuthorBySlug(slug) {
        return this.authors.find((p) => p.slug === slug);
    }
    async getTopAuthors({ limit = 10 }) {
        return this.authors.slice(0, limit);
    }
    update(id, updateAuthorDto) {
        var _a;
        const author = this.authors.find((p) => p.id === Number(id));
        author.is_approved = (_a = updateAuthorDto.is_approved) !== null && _a !== void 0 ? _a : true;
        return author;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
AuthorsService = __decorate([
    (0, common_1.Injectable)()
], AuthorsService);
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map