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
exports.AttributesService = void 0;
const common_1 = require("@nestjs/common");
const attributes_json_1 = __importDefault(require("../db/pickbazar/attributes.json"));
const attribute_entity_1 = require("./entities/attribute.entity");
const class_transformer_1 = require("class-transformer");
const attributes = (0, class_transformer_1.plainToClass)(attribute_entity_1.Attribute, attributes_json_1.default);
let AttributesService = class AttributesService {
    constructor() {
        this.attributes = attributes;
    }
    create(createAttributeDto) {
        return this.attributes[0];
    }
    findAll() {
        return this.attributes;
    }
    findOne(param) {
        return this.attributes.find((p) => p.id === Number(param) || p.slug === param);
    }
    update(id, updateAttributeDto) {
        return this.attributes[0];
    }
    remove(id) {
        return `This action removes a #${id} attribute`;
    }
};
AttributesService = __decorate([
    (0, common_1.Injectable)()
], AttributesService);
exports.AttributesService = AttributesService;
//# sourceMappingURL=attributes.service.js.map