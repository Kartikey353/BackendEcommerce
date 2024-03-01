import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { GetPaymentMethodsDto } from './dto/get-payment-methods.dto';
import { DefaultCart } from './dto/set-default-card.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PaymentMethodService } from './payment-method.service';
export declare class PaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<import("./entities/payment-method.entity").PaymentMethod>;
    findAll(getTaxesDto: GetPaymentMethodsDto): import("./entities/payment-method.entity").PaymentMethod[];
    findOne(id: string): import("./entities/payment-method.entity").PaymentMethod;
    update(id: string, updateTaxDto: UpdatePaymentMethodDto): import("./entities/payment-method.entity").PaymentMethod;
    remove(id: string): import("./entities/payment-method.entity").PaymentMethod;
}
export declare class SavePaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    savePaymentMethod(createPaymentMethodDto: CreatePaymentMethodDto): Promise<import("./entities/payment-method.entity").PaymentMethod>;
}
export declare class SetDefaultCartController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    setDefaultCart(defaultCart: DefaultCart): import("./entities/payment-method.entity").PaymentMethod;
}
