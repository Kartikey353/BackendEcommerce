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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookController = void 0;
const openapi = require("@nestjs/swagger");
const web_hook_service_1 = require("./web-hook.service");
const common_1 = require("@nestjs/common");
let WebHookController = class WebHookController {
    constructor(webHookServices) {
        this.webHookServices = webHookServices;
    }
    razorPay() {
        return this.webHookServices.razorPay();
    }
    stripe() {
        return this.webHookServices.stripe();
    }
    paypal() {
        return this.webHookServices.paypal();
    }
};
__decorate([
    (0, common_1.Get)('razorpay'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebHookController.prototype, "razorPay", null);
__decorate([
    (0, common_1.Get)('stripe'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebHookController.prototype, "stripe", null);
__decorate([
    (0, common_1.Get)('paypal'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WebHookController.prototype, "paypal", null);
WebHookController = __decorate([
    (0, common_1.Controller)('web-hook'),
    __metadata("design:paramtypes", [web_hook_service_1.WebHookService])
], WebHookController);
exports.WebHookController = WebHookController;
//# sourceMappingURL=web-hook.controller.js.map