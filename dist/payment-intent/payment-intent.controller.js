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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentController = void 0;
const openapi = require("@nestjs/swagger");
const settings_json_1 = __importDefault(require("../db/pickbazar/settings.json"));
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const setting_entity_1 = require("../settings/entities/setting.entity");
const get_payment_intent_dto_1 = require("./dto/get-payment-intent.dto");
const payment_intent_service_1 = require("./payment-intent.service");
const settings = (0, class_transformer_1.plainToClass)(setting_entity_1.Setting, settings_json_1.default);
let PaymentIntentController = class PaymentIntentController {
    constructor(paymentIntentService) {
        this.paymentIntentService = paymentIntentService;
    }
    async getPaymentIntent(query) {
        console.log('payment_intent', 'payment_intent');
        return this.paymentIntentService.getPaymentIntent(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./entries/payment-intent.entity").PaymentIntent }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_payment_intent_dto_1.GetPaymentIntentDto]),
    __metadata("design:returntype", Promise)
], PaymentIntentController.prototype, "getPaymentIntent", null);
PaymentIntentController = __decorate([
    (0, common_1.Controller)('payment-intent'),
    __metadata("design:paramtypes", [payment_intent_service_1.PaymentIntentService])
], PaymentIntentController);
exports.PaymentIntentController = PaymentIntentController;
//# sourceMappingURL=payment-intent.controller.js.map