import { Order } from 'src/orders/entities/order.entity';
export declare class PaypalPaymentService {
    private clientId;
    private clientSecret;
    private environment;
    private client;
    private paypal;
    constructor();
    createPaymentIntent(order: Order): Promise<{
        redirect_url: any;
        id: any;
    }>;
    verifyOrder(orderId: string | number): Promise<{
        id: any;
        status: any;
    }>;
    private getRequestBody;
}
