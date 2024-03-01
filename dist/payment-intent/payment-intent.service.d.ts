import { PaymentIntent } from './entries/payment-intent.entity';
import { GetPaymentIntentDto } from './dto/get-payment-intent.dto';
export declare class PaymentIntentService {
    private paymentIntents;
    getPaymentIntent(query: GetPaymentIntentDto): PaymentIntent;
}
