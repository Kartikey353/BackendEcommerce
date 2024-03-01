import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import Stripe from 'stripe';
import { CardElementDto, CreatePaymentIntentDto, StripeCreateCustomerDto } from './dto/stripe.dto';
import { StripeCustomer, StripeCustomerList, StripePaymentIntent, StripePaymentMethod } from './entity/stripe.entity';
export declare class StripePaymentService {
    private readonly stripeClient;
    private paymentGateways;
    constructor(stripeClient: Stripe);
    createCustomer(createCustomerDto?: StripeCreateCustomerDto): Promise<StripeCustomer>;
    retrieveCustomer(id: string): Promise<StripeCustomer>;
    listAllCustomer(): Promise<StripeCustomerList>;
    createPaymentMethod(cardElementDto: CardElementDto): Promise<StripePaymentMethod>;
    retrievePaymentMethod(method_key: string): Promise<StripePaymentMethod>;
    retrievePaymentMethodByCustomerId(customer: string): Promise<StripePaymentMethod[]>;
    attachPaymentMethodToCustomer(method_id: string, customer_id: string): Promise<StripePaymentMethod>;
    detachPaymentMethodFromCustomer(method_id: string): Promise<StripePaymentMethod>;
    createPaymentIntent(createPaymentIntentDto: CreatePaymentIntentDto): Promise<StripePaymentIntent>;
    retrievePaymentIntent(payment_id: string): Promise<StripePaymentIntent>;
    makePaymentIntentParam(order: Order, me: User): Promise<{
        customer: string;
        amount: number;
        currency: string;
        payment_method_types: string[];
        metadata: {
            order_tracking_number: string;
        };
    }>;
}
