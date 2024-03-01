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
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
const tag_entity_1 = require("./entities/tag.entity");
const tags_json_1 = __importDefault(require("../db/pickbazar/tags.json"));
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const tags = (0, class_transformer_1.plainToClass)(tag_entity_1.Tag, tags_json_1.default);
const options = {
    keys: ['name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(tags, options);
let TagsService = class TagsService {
    constructor() {
        this.tags = tags;
    }
    create(createTagDto) {
        return Object.assign({ id: this.tags.length + 1 }, createTagDto);
    }
    findAll({ page, limit, search }) {
        var _a;
        if (!page)
            page = 1;
        let data = this.tags;
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                console.log(value, 'value');
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
        const url = `/tags?limit=${limit}`;
        return Object.assign({ data }, (0, paginate_1.paginate)(this.tags.length, page, limit, this.tags.length, url));
    }
    findOne(param, language) {
        return this.tags.find((p) => p.id === Number(param) || p.slug === param);
    }
    update(id, updateTagDto) {
        return this.tags[0];
    }
    remove(id) {
        return `This action removes a #${id} tag`;
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)()
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map