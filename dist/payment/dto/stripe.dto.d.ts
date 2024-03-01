export declare class StripeCreateCustomerDto {
    address?: Address;
    description?: string;
    name?: string;
    email?: string;
}
export declare class Address {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
}
export declare class CardElementDto {
    number: string;
    exp_month: number;
    exp_year: number;
    cvc: string;
}
export declare class CreatePaymentIntentDto {
    amount: number;
    currency: string;
}
