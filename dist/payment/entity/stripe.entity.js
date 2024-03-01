"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentMetadata = exports.StripePaymentIntent = exports.ThreeDSecureUsage = exports.Networks = exports.Checks = exports.Card = exports.Address = exports.BillingDetails = exports.Metadata = exports.InvoiceSettings = exports.StripePaymentMethod = exports.StripeCustomer = exports.StripeCustomerList = void 0;
const openapi = require("@nestjs/swagger");
class StripeCustomerList {
    static _OPENAPI_METADATA_FACTORY() {
        return { object: { required: false, type: () => String }, url: { required: false, type: () => String }, has_more: { required: false, type: () => Boolean }, data: { required: false, type: () => [require("./stripe.entity").StripeCustomer] } };
    }
}
exports.StripeCustomerList = StripeCustomerList;
class StripeCustomer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => String }, object: { required: false, type: () => String }, address: { required: false, type: () => require("./stripe.entity").Address }, balance: { required: false, type: () => Number }, created: { required: false, type: () => Number }, currency: { required: false, type: () => String }, default_source: { required: false, type: () => Object }, delinquent: { required: false, type: () => Boolean }, description: { required: false, type: () => Object }, discount: { required: false, type: () => Object }, email: { required: false, type: () => Object }, invoice_prefix: { required: false, type: () => String }, invoice_settings: { required: false, type: () => require("./stripe.entity").InvoiceSettings }, livemode: { required: false, type: () => Boolean }, metadata: { required: false, type: () => require("./stripe.entity").Metadata }, name: { required: false, type: () => Object }, next_invoice_sequence: { required: false, type: () => Number }, phone: { required: false, type: () => Object }, preferred_locales: { required: false, type: () => [Object] }, shipping: { required: false, type: () => Object }, tax_exempt: { required: false, type: () => String }, test_clock: { required: false, type: () => Object } };
    }
}
exports.StripeCustomer = StripeCustomer;
class StripePaymentMethod {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => String }, object: { required: false, type: () => String }, billing_details: { required: false, type: () => require("./stripe.entity").BillingDetails }, card: { required: false, type: () => require("./stripe.entity").Card }, created: { required: false, type: () => Number }, customer: { required: false, type: () => Object }, livemode: { required: false, type: () => Boolean }, metadata: { required: false, type: () => require("./stripe.entity").Metadata }, type: { required: false, type: () => String } };
    }
}
exports.StripePaymentMethod = StripePaymentMethod;
class InvoiceSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { custom_fields: { required: false, type: () => Object }, default_payment_method: { required: false, type: () => Object }, footer: { required: false, type: () => Object }, rendering_options: { required: false, type: () => Object } };
    }
}
exports.InvoiceSettings = InvoiceSettings;
class Metadata {
    static _OPENAPI_METADATA_FACTORY() {
        return { order_tracking_number: { required: false, type: () => Number } };
    }
}
exports.Metadata = Metadata;
class BillingDetails {
    static _OPENAPI_METADATA_FACTORY() {
        return { address: { required: false, type: () => require("./stripe.entity").Address }, email: { required: false, type: () => Object }, name: { required: false, type: () => Object }, phone: { required: false, type: () => Object } };
    }
}
exports.BillingDetails = BillingDetails;
class Address {
    static _OPENAPI_METADATA_FACTORY() {
        return { city: { required: false, type: () => Object }, country: { required: false, type: () => Object }, line1: { required: false, type: () => Object }, line2: { required: false, type: () => Object }, postal_code: { required: false, type: () => Object }, state: { required: false, type: () => Object } };
    }
}
exports.Address = Address;
class Card {
    static _OPENAPI_METADATA_FACTORY() {
        return { brand: { required: false, type: () => String }, checks: { required: false, type: () => require("./stripe.entity").Checks }, country: { required: false, type: () => String }, exp_month: { required: false, type: () => Number }, exp_year: { required: false, type: () => Number }, fingerprint: { required: false, type: () => String }, funding: { required: false, type: () => String }, generated_from: { required: false, type: () => Object }, last4: { required: false, type: () => String }, networks: { required: false, type: () => require("./stripe.entity").Networks }, three_d_secure_usage: { required: false, type: () => require("./stripe.entity").ThreeDSecureUsage }, wallet: { required: false, type: () => Object } };
    }
}
exports.Card = Card;
class Checks {
    static _OPENAPI_METADATA_FACTORY() {
        return { address_line1_check: { required: false, type: () => Object }, address_postal_code_check: { required: false, type: () => Object }, cvc_check: { required: false, type: () => String } };
    }
}
exports.Checks = Checks;
class Networks {
    static _OPENAPI_METADATA_FACTORY() {
        return { available: { required: false, type: () => [String] }, preferred: { required: false, type: () => Object } };
    }
}
exports.Networks = Networks;
class ThreeDSecureUsage {
    static _OPENAPI_METADATA_FACTORY() {
        return { supported: { required: false, type: () => Boolean } };
    }
}
exports.ThreeDSecureUsage = ThreeDSecureUsage;
class StripePaymentIntent {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: false, type: () => String }, amount: { required: false, type: () => Number }, amount_received: { required: false, type: () => Number }, client_secret: { required: false, type: () => String }, currency: { required: false, type: () => String }, customer: { required: false, type: () => Object }, metadata: { required: false, type: () => require("./stripe.entity").PaymentIntentMetadata }, payment_method_types: { required: false, type: () => [String] }, setup_future_usage: { required: false, type: () => String }, status: { required: false, type: () => String } };
    }
}
exports.StripePaymentIntent = StripePaymentIntent;
class PaymentIntentMetadata {
    static _OPENAPI_METADATA_FACTORY() {
        return { order_tracking_number: { required: false, type: () => Number } };
    }
}
exports.PaymentIntentMetadata = PaymentIntentMetadata;
//# sourceMappingURL=stripe.entity.js.map