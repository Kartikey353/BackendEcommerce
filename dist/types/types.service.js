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
exports.TypesService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const type_entity_1 = require("./entities/type.entity");
const types_json_1 = __importDefault(require("../db/pickbazar/types.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const types = (0, class_transformer_1.plainToClass)(type_entity_1.Type, types_json_1.default);
const options = {
    keys: ['name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(types, options);
let TypesService = class TypesService {
    constructor() {
        this.types = types;
    }
    getTypes({ text, search }) {
        var _a, _b;
        let data = this.types;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
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
            data = (_b = fuse
                .search({
                $and: searchText,
            })) === null || _b === void 0 ? void 0 : _b.map(({ item }) => item);
        }
        return data;
    }
    getTypeBySlug(slug) {
        return this.types.find((p) => p.slug === slug);
    }
    create(createTypeDto) {
        return this.types[0];
    }
    findAll() {
        return `This action returns all types`;
    }
    findOne(id) {
        return `This action returns a #${id} type`;
    }
    update(id, updateTypeDto) {
        return this.types[0];
    }
    remove(id) {
        return `This action removes a #${id} type`;
    }
};
TypesService = __decorate([
    (0, common_1.Injectable)()
], TypesService);
exports.TypesService = TypesService;
//# sourceMappingURL=types.service.js.map