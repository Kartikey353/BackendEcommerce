"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalPaymentService = void 0;
const common_1 = require("@nestjs/common");
const Paypal = __importStar(require("@paypal/checkout-server-sdk"));
const uuid_1 = require("uuid");
let PaypalPaymentService = class PaypalPaymentService {
    constructor() {
        this.paypal = Paypal;
        this.clientId = process.env.PAYPAL_SANDBOX_CLIENT_ID;
        this.clientSecret = process.env.PAYPAL_SANDBOX_CLIENT_SECRET;
        this.environment = new this.paypal.core.SandboxEnvironment(this.clientId, this.clientSecret);
        this.client = new this.paypal.core.PayPalHttpClient(this.environment);
    }
    async createPaymentIntent(order) {
        const request = await new this.paypal.orders.OrdersCreateRequest();
        request.headers = Object.assign(Object.assign({}, request.headers), { 'Content-Type': 'application/json', 'PayPal-Request-Id': (0, uuid_1.v4)() });
        const body = this.getRequestBody(order);
        request.requestBody(body);
        try {
            const response = await this.client.execute(request);
            const { links, id } = await response.result;
            return {
                redirect_url: links[1].href,
                id: id,
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    async verifyOrder(orderId) {
        const request = await new this.paypal.orders.OrdersCaptureRequest(orderId);
        request.requestBody({});
        const response = await this.client.execute(request);
        return {
            id: response.result.id,
            status: response.result.status,
        };
    }
    getRequestBody(order) {
        const redirectUrl = process.env.SHOP_URL || 'http://localhost:3003';
        return {
            intent: 'CAPTURE',
            payment_source: {
                paypal: {
                    experience_context: {
                        return_url: `${redirectUrl}/orders/${order.tracking_number}/thank-you`,
                        payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
                        cancel_url: `${redirectUrl}/orders/${order.tracking_number}/payment`,
                        user_action: 'PAY_NOW',
                    },
                },
            },
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: 56,
                    },
                    description: 'Order From Marvel',
                    reference_id: order.tracking_number.toString(),
                },
            ],
        };
    }
};
PaypalPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PaypalPaymentService);
exports.PaypalPaymentService = PaypalPaymentService;
//# sourceMappingURL=paypal-payment.service.js.map