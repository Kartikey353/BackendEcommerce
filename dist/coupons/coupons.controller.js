"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveCouponController = exports.DisapproveCouponController = exports.CouponsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const coupons_service_1 = require("./coupons.service");
const create_coupon_dto_1 = require("./dto/create-coupon.dto");
const get_coupons_dto_1 = require("./dto/get-coupons.dto");
const update_coupon_dto_1 = require("./dto/update-coupon.dto");
let CouponsController = class CouponsController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    createCoupon(createCouponDto) {
        return this.couponsService.create(createCouponDto);
    }
    getCoupons(query) {
        return this.couponsService.getCoupons(query);
    }
    getCoupon(param, language) {
        return this.couponsService.getCoupon(param, language);
    }
    verify(param, language) {
        return this.couponsService.getCoupon(param, language);
    }
    verifyCoupon(code) {
        return this.couponsService.verifyCoupon(code);
    }
    updateCoupon(id, updateCouponDto) {
        return this.couponsService.update(+id, updateCouponDto);
    }
    deleteCoupon(id) {
        return this.couponsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/coupon.entity").Coupon }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_dto_1.CreateCouponDto]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "createCoupon", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_coupons_dto_1.GetCouponsDto]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "getCoupons", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/coupon.entity").Coupon }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "getCoupon", null);
__decorate([
    (0, common_1.Get)(':id/verify'),
    openapi.ApiResponse({ status: 200, type: require("./entities/coupon.entity").Coupon }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('verify'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "verifyCoupon", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/coupon.entity").Coupon }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_coupon_dto_1.UpdateCouponDto]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "updateCoupon", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CouponsController.prototype, "deleteCoupon", null);
CouponsController = __decorate([
    (0, common_1.Controller)('coupons'),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], CouponsController);
exports.CouponsController = CouponsController;
let DisapproveCouponController = class DisapproveCouponController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    async disapproveCoupon(id) {
        return this.couponsService.disapproveCoupon(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/coupon.entity").Coupon }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DisapproveCouponController.prototype, "disapproveCoupon", null);
DisapproveCouponController = __decorate([
    (0, common_1.Controller)('disapprove-coupon'),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], DisapproveCouponController);
exports.DisapproveCouponController = DisapproveCouponController;
let ApproveCouponController = class ApproveCouponController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    async approveCoupon(id) {
        return this.couponsService.approveCoupon(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/coupon.entity").Coupon }),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApproveCouponController.prototype, "approveCoupon", null);
ApproveCouponController = __decorate([
    (0, common_1.Controller)('approve-coupon'),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], ApproveCouponController);
exports.ApproveCouponController = ApproveCouponController;
//# sourceMappingURL=coupons.controller.js.map