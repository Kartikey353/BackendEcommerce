import { AuthService } from 'src/auth/auth.service';
import { StripePaymentService } from 'src/payment/stripe-payment.service';
import { SettingsService } from 'src/settings/settings.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { DefaultCart } from './dto/set-default-card.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PaymentMethod } from './entities/payment-method.entity';
export declare class PaymentMethodService {
    private readonly authService;
    private readonly stripeService;
    private readonly settingService;
    private paymentMethods;
    constructor(authService: AuthService, stripeService: StripePaymentService, settingService: SettingsService);
    private setting;
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod>;
    findAll(): PaymentMethod[];
    findOne(id: number): PaymentMethod;
    update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto): PaymentMethod;
    remove(id: number): PaymentMethod;
    saveDefaultCart(defaultCart: DefaultCart): PaymentMethod;
    savePaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod>;
    saveCard(createPaymentMethodDto: CreatePaymentMethodDto, paymentGateway: string): Promise<PaymentMethod>;
    paymentMethodAlreadyExists(fingerPrint: string): boolean;
    makeNewPaymentMethodObject(createPaymentMethodDto: CreatePaymentMethodDto, paymentGateway: string): Promise<PaymentMethod>;
}
