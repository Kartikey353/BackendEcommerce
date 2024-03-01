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
exports.OrdersService = void 0;
const order_export_json_1 = __importDefault(require("../db/pickbazar/order-export.json"));
const order_files_json_1 = __importDefault(require("../db/pickbazar/order-files.json"));
const order_invoice_json_1 = __importDefault(require("../db/pickbazar/order-invoice.json"));
const order_statuses_json_1 = __importDefault(require("../db/pickbazar/order-statuses.json"));
const orders_json_1 = __importDefault(require("../db/pickbazar/orders.json"));
const payment_gateway_json_1 = __importDefault(require("../db/pickbazar/payment-gateway.json"));
const payment_intent_json_1 = __importDefault(require("../db/pickbazar/payment-intent.json"));
const settings_json_1 = __importDefault(require("../db/pickbazar/settings.json"));
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const auth_service_1 = require("../auth/auth.service");
const paginate_1 = require("../common/pagination/paginate");
const payment_intent_entity_1 = require("../payment-intent/entries/payment-intent.entity");
const payment_gateway_entity_1 = require("../payment-method/entities/payment-gateway.entity");
const paypal_payment_service_1 = require("../payment/paypal-payment.service");
const stripe_payment_service_1 = require("../payment/stripe-payment.service");
const setting_entity_1 = require("../settings/entities/setting.entity");
const order_status_entity_1 = require("./entities/order-status.entity");
const order_entity_1 = require("./entities/order.entity");
const orders = (0, class_transformer_1.plainToClass)(order_entity_1.Order, orders_json_1.default);
const paymentIntents = (0, class_transformer_1.plainToClass)(payment_intent_entity_1.PaymentIntent, payment_intent_json_1.default);
const paymentGateways = (0, class_transformer_1.plainToClass)(payment_gateway_entity_1.PaymentGateWay, payment_gateway_json_1.default);
const orderStatus = (0, class_transformer_1.plainToClass)(order_status_entity_1.OrderStatus, order_statuses_json_1.default);
const options = {
    keys: ['name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(orderStatus, options);
const orderFiles = (0, class_transformer_1.plainToClass)(order_entity_1.OrderFiles, order_files_json_1.default);
const settings = (0, class_transformer_1.plainToClass)(setting_entity_1.Setting, settings_json_1.default);
let OrdersService = class OrdersService {
    constructor(authService, stripeService, paypalService) {
        this.authService = authService;
        this.stripeService = stripeService;
        this.paypalService = paypalService;
        this.orders = orders;
        this.orderStatus = orderStatus;
        this.orderFiles = orderFiles;
        this.setting = Object.assign({}, settings);
    }
    async create(createOrderInput) {
        const order = this.orders[0];
        const payment_gateway_type = createOrderInput.payment_gateway
            ? createOrderInput.payment_gateway
            : order_entity_1.PaymentGatewayType.CASH_ON_DELIVERY;
        order.payment_gateway = payment_gateway_type;
        order.payment_intent = null;
        switch (payment_gateway_type) {
            case order_entity_1.PaymentGatewayType.CASH_ON_DELIVERY:
                order.order_status = order_entity_1.OrderStatusType.PROCESSING;
                order.payment_status = order_entity_1.PaymentStatusType.CASH_ON_DELIVERY;
                break;
            case order_entity_1.PaymentGatewayType.CASH:
                order.order_status = order_entity_1.OrderStatusType.PROCESSING;
                order.payment_status = order_entity_1.PaymentStatusType.CASH;
                break;
            case order_entity_1.PaymentGatewayType.FULL_WALLET_PAYMENT:
                order.order_status = order_entity_1.OrderStatusType.COMPLETED;
                order.payment_status = order_entity_1.PaymentStatusType.WALLET;
                break;
            default:
                order.order_status = order_entity_1.OrderStatusType.PENDING;
                order.payment_status = order_entity_1.PaymentStatusType.PENDING;
                break;
        }
        order.children = this.processChildrenOrder(order);
        try {
            if ([
                order_entity_1.PaymentGatewayType.STRIPE,
                order_entity_1.PaymentGatewayType.PAYPAL,
                order_entity_1.PaymentGatewayType.RAZORPAY,
            ].includes(payment_gateway_type)) {
                const paymentIntent = await this.processPaymentIntent(order, this.setting);
                order.payment_intent = paymentIntent;
            }
            return order;
        }
        catch (error) {
            return order;
        }
    }
    async getOrders({ limit, page, customer_id, tracking_number, search, shop_id, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 15;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.orders;
        if (shop_id && shop_id !== 'undefined') {
            data = (_a = this.orders) === null || _a === void 0 ? void 0 : _a.filter((p) => { var _a; return ((_a = p === null || p === void 0 ? void 0 : p.shop) === null || _a === void 0 ? void 0 : _a.id) === Number(shop_id); });
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/orders?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    async getOrderByIdOrTrackingNumber(id) {
        var _a;
        try {
            return ((_a = this.orders.find((o) => o.id === Number(id) || o.tracking_number === id.toString())) !== null && _a !== void 0 ? _a : this.orders[0]);
        }
        catch (error) {
            console.log(error);
        }
    }
    getOrderStatuses({ limit, page, search, orderBy, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.orderStatus;
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/order-status?search=${search}&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getOrderStatus(param, language) {
        return this.orderStatus.find((p) => p.slug === param);
    }
    update(id, updateOrderInput) {
        return this.orders[0];
    }
    remove(id) {
        return `This action removes a #${id} order`;
    }
    verifyCheckout(input) {
        return {
            total_tax: 0,
            shipping_charge: 0,
            unavailable_products: [],
            wallet_currency: 0,
            wallet_amount: 0,
        };
    }
    createOrderStatus(createOrderStatusInput) {
        return this.orderStatus[0];
    }
    updateOrderStatus(updateOrderStatusInput) {
        return this.orderStatus[0];
    }
    async getOrderFileItems({ page, limit }) {
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = orderFiles.slice(startIndex, endIndex);
        const url = `/downloads?&limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(orderFiles.length, page, limit, results.length, url));
    }
    async getDigitalFileDownloadUrl(digitalFileId) {
        const item = this.orderFiles.find((singleItem) => singleItem.digital_file_id === digitalFileId);
        return item.file.url;
    }
    async exportOrder(shop_id) {
        return order_export_json_1.default.url;
    }
    async downloadInvoiceUrl(shop_id) {
        return order_invoice_json_1.default[0].url;
    }
    processChildrenOrder(order) {
        return [...order.children].map((child) => {
            child.order_status = order.order_status;
            child.payment_status = order.payment_status;
            return child;
        });
    }
    async processPaymentIntent(order, setting) {
        const paymentIntent = paymentIntents.find((intent) => intent.tracking_number === order.tracking_number &&
            intent.payment_gateway.toString().toLowerCase() ===
                setting.options.paymentGateway.toString().toLowerCase());
        if (paymentIntent) {
            return paymentIntent;
        }
        const { id: payment_id, client_secret = null, redirect_url = null, customer = null, } = await this.savePaymentIntent(order, order.payment_gateway);
        const is_redirect = redirect_url ? true : false;
        const paymentIntentInfo = {
            id: Number(Date.now()),
            order_id: order.id,
            tracking_number: order.tracking_number,
            payment_gateway: order.payment_gateway.toString().toLowerCase(),
            payment_intent_info: {
                client_secret,
                payment_id,
                redirect_url,
                is_redirect,
            },
        };
        return paymentIntentInfo;
    }
    async savePaymentIntent(order, paymentGateway) {
        const me = this.authService.me();
        switch (order.payment_gateway) {
            case order_entity_1.PaymentGatewayType.STRIPE:
                const paymentIntentParam = await this.stripeService.makePaymentIntentParam(order, me);
                return await this.stripeService.createPaymentIntent(paymentIntentParam);
            case order_entity_1.PaymentGatewayType.PAYPAL:
                return this.paypalService.createPaymentIntent(order);
                break;
            default:
                break;
        }
    }
    async stripePay(order) {
        this.orders[0]['order_status'] = order_entity_1.OrderStatusType.PROCESSING;
        this.orders[0]['payment_status'] = order_entity_1.PaymentStatusType.SUCCESS;
        this.orders[0]['payment_intent'] = null;
    }
    async paypalPay(order) {
        this.orders[0]['order_status'] = order_entity_1.OrderStatusType.PROCESSING;
        this.orders[0]['payment_status'] = order_entity_1.PaymentStatusType.SUCCESS;
        const { status } = await this.paypalService.verifyOrder(order.payment_intent.payment_intent_info.payment_id);
        this.orders[0]['payment_intent'] = null;
        if (status === 'COMPLETED') {
        }
    }
    changeOrderPaymentStatus(orderStatus, paymentStatus) {
        this.orders[0]['order_status'] = orderStatus;
        this.orders[0]['payment_status'] = paymentStatus;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        stripe_payment_service_1.StripePaymentService,
        paypal_payment_service_1.PaypalPaymentService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map