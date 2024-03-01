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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePaymentService = void 0;
const common_1 = require("@nestjs/common");
const settings_json_1 = __importDefault(require("../db/pickbazar/settings.json"));
const setting_entity_1 = require("../settings/entities/setting.entity");
const class_transformer_1 = require("class-transformer");
const nestjs_stripe_1 = require("nestjs-stripe");
const payment_gateway_json_1 = __importDefault(require("../db/pickbazar/payment-gateway.json"));
const payment_gateway_entity_1 = require("../payment-method/entities/payment-gateway.entity");
const stripe_1 = __importDefault(require("stripe"));
const paymentGateways = (0, class_transformer_1.plainToClass)(payment_gateway_entity_1.PaymentGateWay, payment_gateway_json_1.default);
const setting = (0, class_transformer_1.plainToClass)(setting_entity_1.Setting, settings_json_1.default);
let StripePaymentService = class StripePaymentService {
    constructor(stripeClient) {
        this.stripeClient = stripeClient;
        this.paymentGateways = paymentGateways;
    }
    async createCustomer(createCustomerDto) {
        try {
            return await this.stripeClient.customers.create(createCustomerDto);
        }
        catch (error) {
            console.log(error);
        }
    }
    async retrieveCustomer(id) {
        try {
            return await this.stripeClient.customers.retrieve(id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async listAllCustomer() {
        try {
            return await this.stripeClient.customers.list();
        }
        catch (error) {
            console.log(error);
        }
    }
    async createPaymentMethod(cardElementDto) {
        try {
            const paymentMethod = await this.stripeClient.paymentMethods.create({
                type: 'card',
                card: cardElementDto,
            });
            const newPaymentMethod = __rest(paymentMethod, []);
            return newPaymentMethod;
        }
        catch (error) {
            console.log(error);
        }
    }
    async retrievePaymentMethod(method_key) {
        try {
            return await this.stripeClient.paymentMethods.retrieve(method_key);
        }
        catch (error) {
            console.log(error);
        }
    }
    async retrievePaymentMethodByCustomerId(customer) {
        try {
            const { data } = await this.stripeClient.customers.listPaymentMethods(customer, {
                type: 'card',
            });
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async attachPaymentMethodToCustomer(method_id, customer_id) {
        try {
            return await this.stripeClient.paymentMethods.attach(method_id, {
                customer: customer_id,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    async detachPaymentMethodFromCustomer(method_id) {
        try {
            return await this.stripeClient.paymentMethods.detach(method_id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async createPaymentIntent(createPaymentIntentDto) {
        try {
            const paymentIntent = await this.stripeClient.paymentIntents.create(createPaymentIntentDto);
            const newIntent = __rest(paymentIntent, []);
            return newIntent;
        }
        catch (error) {
            console.log(error);
        }
    }
    async retrievePaymentIntent(payment_id) {
        try {
            return await this.stripeClient.paymentIntents.retrieve(payment_id);
        }
        catch (error) {
            console.log(error);
        }
    }
    async makePaymentIntentParam(order, me) {
        const customerList = await this.listAllCustomer();
        const currentCustomer = customerList.data.find((customer) => customer.email === me.email);
        if (!currentCustomer) {
            const newCustomer = await this.createCustomer({
                name: me.name,
                email: me.email,
            });
            currentCustomer.id = newCustomer.id;
        }
        return {
            customer: currentCustomer.id,
            amount: Math.ceil(order.paid_total),
            currency: process.env.DEFAULT_CURRENCY || setting.options.currency,
            payment_method_types: ['card'],
            metadata: {
                order_tracking_number: order.tracking_number,
            },
        };
    }
};
StripePaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_stripe_1.InjectStripe)()),
    __metadata("design:paramtypes", [stripe_1.default])
], StripePaymentService);
exports.StripePaymentService = StripePaymentService;
//# sourceMappingURL=stripe-payment.service.js.map