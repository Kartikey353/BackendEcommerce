"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsModule = void 0;
const common_1 = require("@nestjs/common");
const coupons_service_1 = require("./coupons.service");
const coupons_controller_1 = require("./coupons.controller");
let CouponsModule = class CouponsModule {
};
CouponsModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            coupons_controller_1.CouponsController,
            coupons_controller_1.ApproveCouponController,
            coupons_controller_1.DisapproveCouponController,
        ],
        providers: [coupons_service_1.CouponsService],
    })
], CouponsModule);
exports.CouponsModule = CouponsModule;
//# sourceMappingURL=coupons.module.js.map