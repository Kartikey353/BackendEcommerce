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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodService = void 0;
const payment_gateway_json_1 = __importDefault(require("../db/pickbazar/payment-gateway.json"));
const payment_methods_json_1 = __importDefault(require("../db/pickbazar/payment-methods.json"));
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const auth_service_1 = require("../auth/auth.service");
const stripe_payment_service_1 = require("../payment/stripe-payment.service");
const settings_service_1 = require("../settings/settings.service");
const payment_gateway_entity_1 = require("./entities/payment-gateway.entity");
const payment_method_entity_1 = require("./entities/payment-method.entity");
const order_entity_1 = require("../orders/entities/order.entity");
const paymentMethods = (0, class_transformer_1.plainToClass)(payment_method_entity_1.PaymentMethod, payment_methods_json_1.default);
const paymentGateways = (0, class_transformer_1.plainToClass)(payment_gateway_entity_1.PaymentGateWay, payment_gateway_json_1.default);
let PaymentMethodService = class PaymentMethodService {
    constructor(authService, stripeService, settingService) {
        this.authService = authService;
        this.stripeService = stripeService;
        this.settingService = settingService;
        this.paymentMethods = paymentMethods;
        this.setting = this.settingService.findAll();
    }
    async create(createPaymentMethodDto) {
        try {
            const defaultCard = this.paymentMethods.find((card) => card.default_card);
            if (!defaultCard || this.paymentMethods.length === 0) {
                createPaymentMethodDto.default_card = true;
            }
            if (createPaymentMethodDto.default_card) {
                this.paymentMethods = [...this.paymentMethods].map((card) => {
                    card.default_card = false;
                    return card;
                });
            }
            const paymentGateway = order_entity_1.PaymentGatewayType.STRIPE;
            return await this.saveCard(createPaymentMethodDto, paymentGateway);
        }
        catch (error) {
            console.log(error);
            return this.paymentMethods[0];
        }
    }
    findAll() {
        return this.paymentMethods;
    }
    findOne(id) {
        return this.paymentMethods.find((pm) => pm.id === Number(id));
    }
    update(id, updatePaymentMethodDto) {
        return this.findOne(id);
    }
    remove(id) {
        const card = this.findOne(id);
        this.paymentMethods = [...this.paymentMethods].filter((cards) => cards.id !== id);
        return card;
    }
    saveDefaultCart(defaultCart) {
        const { method_id } = defaultCart;
        this.paymentMethods = [...this.paymentMethods].map((c) => {
            if (c.id === Number(method_id)) {
                c.default_card = true;
            }
            else {
                c.default_card = false;
            }
            return c;
        });
        return this.findOne(Number(method_id));
    }
    async savePaymentMethod(createPaymentMethodDto) {
        const paymentGateway = order_entity_1.PaymentGatewayType.STRIPE;
        try {
            return this.saveCard(createPaymentMethodDto, paymentGateway);
        }
        catch (err) {
            console.log(err);
        }
    }
    async saveCard(createPaymentMethodDto, paymentGateway) {
        const { method_key, default_card } = createPaymentMethodDto;
        const defaultCard = this.paymentMethods.find((card) => card.default_card);
        if (!defaultCard || this.paymentMethods.length === 0) {
            createPaymentMethodDto.default_card = true;
        }
        const retrievedPaymentMethod = await this.stripeService.retrievePaymentMethod(method_key);
        if (this.paymentMethodAlreadyExists(retrievedPaymentMethod.card.fingerprint)) {
            return this.paymentMethods.find((pMethod) => pMethod.method_key === method_key);
        }
        else {
            const paymentMethod = await this.makeNewPaymentMethodObject(createPaymentMethodDto, paymentGateway);
            this.paymentMethods.push(paymentMethod);
            return paymentMethod;
        }
        switch (paymentGateway) {
            case 'stripe':
                break;
            case 'paypal':
                break;
            default:
                break;
        }
    }
    paymentMethodAlreadyExists(fingerPrint) {
        const paymentMethod = this.paymentMethods.find((pMethod) => pMethod.fingerprint === fingerPrint);
        if (paymentMethod) {
            return true;
        }
        return false;
    }
    async makeNewPaymentMethodObject(createPaymentMethodDto, paymentGateway) {
        const { method_key, default_card } = createPaymentMethodDto;
        const { id: user_id, name, email } = this.authService.me();
        const listofCustomer = await this.stripeService.listAllCustomer();
        let currentCustomer = listofCustomer.data.find((customer) => customer.email === email);
        if (!currentCustomer) {
            const newCustomer = await this.stripeService.createCustomer({
                name,
                email,
            });
            currentCustomer = newCustomer;
        }
        const attachedPaymentMethod = await this.stripeService.attachPaymentMethodToCustomer(method_key, currentCustomer.id);
        let customerGateway = paymentGateways.find((pGateway) => pGateway.user_id === user_id &&
            pGateway.gateway_name === paymentGateway);
        if (!customerGateway) {
            customerGateway = {
                id: Number(Date.now()),
                user_id: user_id,
                customer_id: currentCustomer['id'],
                gateway_name: paymentGateway,
                created_at: new Date(),
                updated_at: new Date(),
            };
            paymentGateways.push(customerGateway);
        }
        const paymentMethod = {
            id: Number(Date.now()),
            method_key: method_key,
            payment_gateway_id: customerGateway.id,
            default_card: default_card,
            fingerprint: attachedPaymentMethod.card.fingerprint,
            owner_name: attachedPaymentMethod.billing_details.name,
            last4: attachedPaymentMethod.card.last4,
            expires: `${attachedPaymentMethod.card.exp_month}/${attachedPaymentMethod.card.exp_year}`,
            network: attachedPaymentMethod.card.brand,
            type: attachedPaymentMethod.card.funding,
            origin: attachedPaymentMethod.card.country,
            verification_check: attachedPaymentMethod.card.checks.cvc_check,
            created_at: new Date(),
            updated_at: new Date(),
        };
        return paymentMethod;
    }
};
PaymentMethodService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        stripe_payment_service_1.StripePaymentService,
        settings_service_1.SettingsService])
], PaymentMethodService);
exports.PaymentMethodService = PaymentMethodService;
//# sourceMappingURL=payment-method.service.js.map