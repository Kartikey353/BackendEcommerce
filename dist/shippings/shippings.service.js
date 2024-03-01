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
exports.ShippingsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const shipping_entity_1 = require("./entities/shipping.entity");
const shippings_json_1 = __importDefault(require("../db/pickbazar/shippings.json"));
const shippings = (0, class_transformer_1.plainToClass)(shipping_entity_1.Shipping, shippings_json_1.default);
let ShippingsService = class ShippingsService {
    constructor() {
        this.shippings = shippings;
    }
    create(createShippingDto) {
        return this.shippings[0];
    }
    getShippings({}) {
        return this.shippings;
    }
    findOne(id) {
        return this.shippings.find((shipping) => shipping.id === Number(id));
    }
    update(id, updateShippingDto) {
        return this.shippings[0];
    }
    remove(id) {
        return `This action removes a #${id} shipping`;
    }
};
ShippingsService = __decorate([
    (0, common_1.Injectable)()
], ShippingsService);
exports.ShippingsService = ShippingsService;
//# sourceMappingURL=shippings.service.js.map