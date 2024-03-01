export declare class PaypalCreateIntentPram {
    intent: string;
    purchase_units: PurchaseUnit[];
    payment_source: PaymentSource;
}
export declare class PurchaseUnit {
    invoice_id: number;
    amount: Amount;
    description: string;
}
export declare class Amount {
    currency_code: string;
    value: number;
}
export declare class PaymentSource {
    paypal: Paypal;
}
export declare class Paypal {
    experience_context: ExperienceContext;
}
export declare class ExperienceContext {
    user_action: string;
    payment_method_preference: string;
    cancel_url: string;
    return_url: string;
}
