"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashSaleModule = void 0;
const common_1 = require("@nestjs/common");
const flash_sale_controller_1 = require("./flash-sale.controller");
const flash_sale_service_1 = require("./flash-sale.service");
let FlashSaleModule = class FlashSaleModule {
};
FlashSaleModule = __decorate([
    (0, common_1.Module)({
        controllers: [flash_sale_controller_1.FlashSaleController, flash_sale_controller_1.ProductsByFlashSaleController],
        providers: [flash_sale_service_1.FlashSaleService],
    })
], FlashSaleModule);
exports.FlashSaleModule = FlashSaleModule;
//# sourceMappingURL=flash-sale.module.js.map