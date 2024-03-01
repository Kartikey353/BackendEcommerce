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
exports.ManufacturersService = void 0;
const common_1 = require("@nestjs/common");
const manufacturer_entity_1 = require("./entities/manufacturer.entity");
const manufacturers_json_1 = __importDefault(require("../db/pickbazar/manufacturers.json"));
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const manufacturers = (0, class_transformer_1.plainToClass)(manufacturer_entity_1.Manufacturer, manufacturers_json_1.default);
const options = {
    keys: ['name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(manufacturers, options);
let ManufacturersService = class ManufacturersService {
    constructor() {
        this.manufacturers = manufacturers;
    }
    create(createManufactureDto) {
        return this.manufacturers[0];
    }
    async getManufactures({ limit, page, search, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.manufacturers;
        if (search) {
            console.log('search', search);
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/manufacturers?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    async getTopManufactures({ limit = 10, }) {
        return manufacturers.slice(0, limit);
    }
    async getManufacturesBySlug(slug) {
        return this.manufacturers.find((singleManufacture) => singleManufacture.slug === slug);
    }
    update(id, updateManufacturesDto) {
        var _a;
        const manufacturer = this.manufacturers.find((p) => p.id === Number(id));
        manufacturer.is_approved = (_a = updateManufacturesDto.is_approved) !== null && _a !== void 0 ? _a : true;
        return manufacturer;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
ManufacturersService = __decorate([
    (0, common_1.Injectable)()
], ManufacturersService);
exports.ManufacturersService = ManufacturersService;
//# sourceMappingURL=manufacturers.service.js.map