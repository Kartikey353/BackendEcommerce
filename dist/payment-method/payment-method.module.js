"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const payment_module_1 = require("../payment/payment.module");
const settings_module_1 = require("../settings/settings.module");
const payment_method_controller_1 = require("./payment-method.controller");
const payment_method_service_1 = require("./payment-method.service");
let PaymentMethodModule = class PaymentMethodModule {
};
PaymentMethodModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, payment_module_1.PaymentModule, settings_module_1.SettingsModule],
        controllers: [
            payment_method_controller_1.PaymentMethodController,
            payment_method_controller_1.SetDefaultCartController,
            payment_method_controller_1.SavePaymentMethodController,
        ],
        providers: [payment_method_service_1.PaymentMethodService],
    })
], PaymentMethodModule);
exports.PaymentMethodModule = PaymentMethodModule;
//# sourceMappingURL=payment-method.module.js.map