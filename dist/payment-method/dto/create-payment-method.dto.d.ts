import { PaymentMethod } from '../entities/payment-method.entity';
declare const CreatePaymentMethodDto_base: import("@nestjs/common").Type<Omit<PaymentMethod, "created_at" | "updated_at" | "id">>;
export declare class CreatePaymentMethodDto extends CreatePaymentMethodDto_base {
}
export {};
