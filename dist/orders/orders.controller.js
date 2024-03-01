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
exports.DownloadInvoiceController = exports.OrderExportController = exports.OrderFilesController = exports.OrderStatusController = exports.OrdersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_order_status_dto_1 = require("./dto/create-order-status.dto");
const create_order_dto_1 = require("./dto/create-order.dto");
const get_downloads_dto_1 = require("./dto/get-downloads.dto");
const get_order_statuses_dto_1 = require("./dto/get-order-statuses.dto");
const get_orders_dto_1 = require("./dto/get-orders.dto");
const order_payment_dto_1 = require("./dto/order-payment.dto");
const update_order_dto_1 = require("./dto/update-order.dto");
const verify_checkout_dto_1 = require("./dto/verify-checkout.dto");
const orders_service_1 = require("./orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async create(createOrderDto) {
        return this.ordersService.create(createOrderDto);
    }
    async getOrders(query) {
        return this.ordersService.getOrders(query);
    }
    getOrderById(id) {
        return this.ordersService.getOrderByIdOrTrackingNumber(Number(id));
    }
    getOrderByTrackingNumber(tracking_id) {
        return this.ordersService.getOrderByIdOrTrackingNumber(tracking_id);
    }
    update(id, updateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    }
    remove(id) {
        return this.ordersService.remove(+id);
    }
    verifyCheckout(query) {
        return this.ordersService.verifyCheckout(query);
    }
    async submitPayment(orderPaymentDto) {
        const { tracking_number } = orderPaymentDto;
        const order = await this.ordersService.getOrderByIdOrTrackingNumber(tracking_number);
        switch (order.payment_gateway.toString().toLowerCase()) {
            case 'stripe':
                this.ordersService.stripePay(order);
                break;
            case 'paypal':
                this.ordersService.paypalPay(order);
                break;
            default:
                break;
        }
        this.ordersService.processChildrenOrder(order);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/order.entity").Order }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-orders.dto").OrderPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_orders_dto_1.GetOrdersDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/order.entity").Order }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Get)('tracking-number/:tracking_id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/order.entity").Order }),
    __param(0, (0, common_1.Param)('tracking_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrderByTrackingNumber", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/order.entity").Order }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('checkout/verify'),
    openapi.ApiResponse({ status: 201, type: require("./dto/verify-checkout.dto").VerifiedCheckoutData }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_checkout_dto_1.CheckoutVerificationDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "verifyCheckout", null);
__decorate([
    (0, common_1.Post)('/payment'),
    (0, common_1.HttpCode)(200),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_payment_dto_1.OrderPaymentDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "submitPayment", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
let OrderStatusController = class OrderStatusController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(createOrderStatusDto) {
        return this.ordersService.createOrderStatus(createOrderStatusDto);
    }
    findAll(query) {
        return this.ordersService.getOrderStatuses(query);
    }
    findOne(param, language) {
        return this.ordersService.getOrderStatus(param, language);
    }
    update(id, updateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    }
    remove(id) {
        return this.ordersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/order-status.entity").OrderStatus }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_status_dto_1.CreateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-order-statuses.dto").OrderStatusPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_order_statuses_dto_1.GetOrderStatusesDto]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/order-status.entity").OrderStatus }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/order.entity").Order }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderStatusController.prototype, "remove", null);
OrderStatusController = __decorate([
    (0, common_1.Controller)('order-status'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrderStatusController);
exports.OrderStatusController = OrderStatusController;
let OrderFilesController = class OrderFilesController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async getOrderFileItems(query) {
        return this.ordersService.getOrderFileItems(query);
    }
    async getDigitalFileDownloadUrl(digitalFileId) {
        return this.ordersService.getDigitalFileDownloadUrl(digitalFileId);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-downloads.dto").OrderFilesPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_downloads_dto_1.GetOrderFilesDto]),
    __metadata("design:returntype", Promise)
], OrderFilesController.prototype, "getOrderFileItems", null);
__decorate([
    (0, common_1.Post)('digital_file'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)('digital_file_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderFilesController.prototype, "getDigitalFileDownloadUrl", null);
OrderFilesController = __decorate([
    (0, common_1.Controller)('downloads'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrderFilesController);
exports.OrderFilesController = OrderFilesController;
let OrderExportController = class OrderExportController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async orderExport(shop_id) {
        return this.ordersService.exportOrder(shop_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Query)('shop_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderExportController.prototype, "orderExport", null);
OrderExportController = __decorate([
    (0, common_1.Controller)('export-order-url'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrderExportController);
exports.OrderExportController = OrderExportController;
let DownloadInvoiceController = class DownloadInvoiceController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async downloadInvoiceUrl(shop_id) {
        return this.ordersService.downloadInvoiceUrl(shop_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)('shop_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DownloadInvoiceController.prototype, "downloadInvoiceUrl", null);
DownloadInvoiceController = __decorate([
    (0, common_1.Controller)('download-invoice-url'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], DownloadInvoiceController);
exports.DownloadInvoiceController = DownloadInvoiceController;
//# sourceMappingURL=orders.controller.js.map