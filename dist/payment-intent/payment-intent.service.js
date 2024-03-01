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
exports.PaymentIntentService = void 0;
const taxes_json_1 = __importDefault(require("../db/pickbazar/taxes.json"));
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const payment_intent_entity_1 = require("./entries/payment-intent.entity");
const orders_json_1 = __importDefault(require("../db/pickbazar/orders.json"));
const order_entity_1 = require("../orders/entities/order.entity");
const orders = (0, class_transformer_1.plainToClass)(order_entity_1.Order, orders_json_1.default);
const paymentIntents = (0, class_transformer_1.plainToClass)(payment_intent_entity_1.PaymentIntent, taxes_json_1.default);
let PaymentIntentService = class PaymentIntentService {
    constructor() {
        this.paymentIntents = paymentIntents;
    }
    getPaymentIntent(query) {
        var _a;
        const order = [...orders].find((or) => or.tracking_number === '334983046149');
        if ((_a = order === null || order === void 0 ? void 0 : order.payment_intent) === null || _a === void 0 ? void 0 : _a.id) {
            return order.payment_intent;
        }
        return {
            id: 6,
            order_id: 35,
            tracking_number: '20230728840046',
            payment_gateway: 'Stripe',
            payment_intent_info: {
                payment_id: 'null',
                is_redirect: false,
                client_secret: '',
            },
        };
    }
};
PaymentIntentService = __decorate([
    (0, common_1.Injectable)()
], PaymentIntentService);
exports.PaymentIntentService = PaymentIntentService;
//# sourceMappingURL=payment-intent.service.js.map