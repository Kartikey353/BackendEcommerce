import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrderFilesDto, OrderFilesPaginator } from './dto/get-downloads.dto';
import { GetOrderStatusesDto } from './dto/get-order-statuses.dto';
import { GetOrdersDto, OrderPaginator } from './dto/get-orders.dto';
import { OrderPaymentDto } from './dto/order-payment.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CheckoutVerificationDto } from './dto/verify-checkout.dto';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    getOrders(query: GetOrdersDto): Promise<OrderPaginator>;
    getOrderById(id: number): Promise<Order>;
    getOrderByTrackingNumber(tracking_id: number): Promise<Order>;
    update(id: string, updateOrderDto: UpdateOrderDto): Order;
    remove(id: string): string;
    verifyCheckout(query: CheckoutVerificationDto): import("./dto/verify-checkout.dto").VerifiedCheckoutData;
    submitPayment(orderPaymentDto: OrderPaymentDto): Promise<void>;
}
export declare class OrderStatusController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderStatusDto: CreateOrderStatusDto): import("./entities/order-status.entity").OrderStatus;
    findAll(query: GetOrderStatusesDto): import("./dto/get-order-statuses.dto").OrderStatusPaginator;
    findOne(param: string, language: string): import("./entities/order-status.entity").OrderStatus;
    update(id: string, updateOrderDto: UpdateOrderDto): Order;
    remove(id: string): string;
}
export declare class OrderFilesController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrderFileItems(query: GetOrderFilesDto): Promise<OrderFilesPaginator>;
    getDigitalFileDownloadUrl(digitalFileId: number): Promise<string>;
}
export declare class OrderExportController {
    private ordersService;
    constructor(ordersService: OrdersService);
    orderExport(shop_id: string): Promise<string>;
}
export declare class DownloadInvoiceController {
    private ordersService;
    constructor(ordersService: OrdersService);
    downloadInvoiceUrl(shop_id: string): Promise<string>;
}
