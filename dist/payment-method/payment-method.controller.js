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
exports.SetDefaultCartController = exports.SavePaymentMethodController = exports.PaymentMethodController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_payment_method_dto_1 = require("./dto/create-payment-method.dto");
const get_payment_methods_dto_1 = require("./dto/get-payment-methods.dto");
const set_default_card_dto_1 = require("./dto/set-default-card.dto");
const update_payment_method_dto_1 = require("./dto/update-payment-method.dto");
const payment_method_service_1 = require("./payment-method.service");
let PaymentMethodController = class PaymentMethodController {
    constructor(paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    create(createPaymentMethodDto) {
        return this.paymentMethodService.create(createPaymentMethodDto);
    }
    findAll(getTaxesDto) {
        return this.paymentMethodService.findAll();
    }
    findOne(id) {
        return this.paymentMethodService.findOne(+id);
    }
    update(id, updateTaxDto) {
        return this.paymentMethodService.update(+id, updateTaxDto);
    }
    remove(id) {
        return this.paymentMethodService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/payment-method.entity").PaymentMethod }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_method_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/payment-method.entity").PaymentMethod] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_payment_methods_dto_1.GetPaymentMethodsDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/payment-method.entity").PaymentMethod }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/payment-method.entity").PaymentMethod }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_payment_method_dto_1.UpdatePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/payment-method.entity").PaymentMethod }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentMethodController.prototype, "remove", null);
PaymentMethodController = __decorate([
    (0, common_1.Controller)('cards'),
    __metadata("design:paramtypes", [payment_method_service_1.PaymentMethodService])
], PaymentMethodController);
exports.PaymentMethodController = PaymentMethodController;
let SavePaymentMethodController = class SavePaymentMethodController {
    constructor(paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    savePaymentMethod(createPaymentMethodDto) {
        createPaymentMethodDto.default_card = false;
        return this.paymentMethodService.savePaymentMethod(createPaymentMethodDto);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/payment-method.entity").PaymentMethod }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_method_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", void 0)
], SavePaymentMethodController.prototype, "savePaymentMethod", null);
SavePaymentMethodController = __decorate([
    (0, common_1.Controller)('/save-payment-method'),
    __metadata("design:paramtypes", [payment_method_service_1.PaymentMethodService])
], SavePaymentMethodController);
exports.SavePaymentMethodController = SavePaymentMethodController;
let SetDefaultCartController = class SetDefaultCartController {
    constructor(paymentMethodService) {
        this.paymentMethodService = paymentMethodService;
    }
    setDefaultCart(defaultCart) {
        return this.paymentMethodService.saveDefaultCart(defaultCart);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/payment-method.entity").PaymentMethod }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_default_card_dto_1.DefaultCart]),
    __metadata("design:returntype", void 0)
], SetDefaultCartController.prototype, "setDefaultCart", null);
SetDefaultCartController = __decorate([
    (0, common_1.Controller)('/set-default-card'),
    __metadata("design:paramtypes", [payment_method_service_1.PaymentMethodService])
], SetDefaultCartController);
exports.SetDefaultCartController = SetDefaultCartController;
//# sourceMappingURL=payment-method.controller.js.map