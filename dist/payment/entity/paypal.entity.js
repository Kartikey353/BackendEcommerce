"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link2 = exports.Address3 = exports.Name3 = exports.Payer = exports.NetAmount = exports.PaypalFee = exports.GrossAmount = exports.SellerReceivableBreakdown = exports.SellerProtection = exports.Amount = exports.Capture = exports.Payments = exports.Address2 = exports.Name2 = exports.Shipping = exports.PurchaseUnit = exports.Address = exports.Name = exports.Paypal = exports.PaypalCaptureOrderResponse = exports.AccessToken = exports.Link = exports.PaymentSource = exports.PaypalOrderResponse = void 0;
const openapi = require("@nestjs/swagger");
class PaypalOrderResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, status: { required: true, type: () => String }, payment_source: { required: true, type: () => require("./paypal.entity").PaymentSource }, links: { required: true, type: () => [require("./paypal.entity").Link] } };
    }
}
exports.PaypalOrderResponse = PaypalOrderResponse;
class PaymentSource {
    static _OPENAPI_METADATA_FACTORY() {
        return { paypal: { required: true, type: () => Object } };
    }
}
exports.PaymentSource = PaymentSource;
class Link {
    static _OPENAPI_METADATA_FACTORY() {
        return { href: { required: true, type: () => String }, rel: { required: true, type: () => String }, method: { required: true, type: () => String } };
    }
}
exports.Link = Link;
class AccessToken {
    static _OPENAPI_METADATA_FACTORY() {
        return { scope: { required: true, type: () => String }, access_token: { required: true, type: () => String }, token_type: { required: true, type: () => String }, app_id: { required: true, type: () => String }, expires_in: { required: true, type: () => Number }, nonce: { required: true, type: () => String } };
    }
}
exports.AccessToken = AccessToken;
class PaypalCaptureOrderResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, status: { required: true, type: () => String }, payment_source: { required: true, type: () => require("./paypal.entity").PaymentSource }, purchase_units: { required: true, type: () => [require("./paypal.entity").PurchaseUnit] }, payer: { required: true, type: () => require("./paypal.entity").Payer }, links: { required: true, type: () => [require("./paypal.entity").Link2] } };
    }
}
exports.PaypalCaptureOrderResponse = PaypalCaptureOrderResponse;
class Paypal {
    static _OPENAPI_METADATA_FACTORY() {
        return { email_address: { required: true, type: () => String }, account_id: { required: true, type: () => String }, name: { required: true, type: () => require("./paypal.entity").Name }, address: { required: true, type: () => require("./paypal.entity").Address } };
    }
}
exports.Paypal = Paypal;
class Name {
    static _OPENAPI_METADATA_FACTORY() {
        return { given_name: { required: true, type: () => String }, surname: { required: true, type: () => String } };
    }
}
exports.Name = Name;
class Address {
    static _OPENAPI_METADATA_FACTORY() {
        return { country_code: { required: true, type: () => String } };
    }
}
exports.Address = Address;
class PurchaseUnit {
    static _OPENAPI_METADATA_FACTORY() {
        return { reference_id: { required: true, type: () => String }, shipping: { required: true, type: () => require("./paypal.entity").Shipping }, payments: { required: true, type: () => require("./paypal.entity").Payments } };
    }
}
exports.PurchaseUnit = PurchaseUnit;
class Shipping {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => require("./paypal.entity").Name2 }, address: { required: true, type: () => require("./paypal.entity").Address2 } };
    }
}
exports.Shipping = Shipping;
class Name2 {
    static _OPENAPI_METADATA_FACTORY() {
        return { full_name: { required: true, type: () => String } };
    }
}
exports.Name2 = Name2;
class Address2 {
    static _OPENAPI_METADATA_FACTORY() {
        return { address_line_1: { required: true, type: () => String }, admin_area_2: { required: true, type: () => String }, admin_area_1: { required: true, type: () => String }, postal_code: { required: true, type: () => String }, country_code: { required: true, type: () => String } };
    }
}
exports.Address2 = Address2;
class Payments {
    static _OPENAPI_METADATA_FACTORY() {
        return { captures: { required: true, type: () => [require("./paypal.entity").Capture] } };
    }
}
exports.Payments = Payments;
class Capture {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, status: { required: true, type: () => String }, amount: { required: true, type: () => require("./paypal.entity").Amount }, final_capture: { required: true, type: () => Boolean }, seller_protection: { required: true, type: () => require("./paypal.entity").SellerProtection }, seller_receivable_breakdown: { required: true, type: () => require("./paypal.entity").SellerReceivableBreakdown }, links: { required: true, type: () => [require("./paypal.entity").Link] }, create_time: { required: true, type: () => String }, update_time: { required: true, type: () => String } };
    }
}
exports.Capture = Capture;
class Amount {
    static _OPENAPI_METADATA_FACTORY() {
        return { currency_code: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.Amount = Amount;
class SellerProtection {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => String }, dispute_categories: { required: true, type: () => [String] } };
    }
}
exports.SellerProtection = SellerProtection;
class SellerReceivableBreakdown {
    static _OPENAPI_METADATA_FACTORY() {
        return { gross_amount: { required: true, type: () => require("./paypal.entity").GrossAmount }, paypal_fee: { required: true, type: () => require("./paypal.entity").PaypalFee }, net_amount: { required: true, type: () => require("./paypal.entity").NetAmount } };
    }
}
exports.SellerReceivableBreakdown = SellerReceivableBreakdown;
class GrossAmount {
    static _OPENAPI_METADATA_FACTORY() {
        return { currency_code: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.GrossAmount = GrossAmount;
class PaypalFee {
    static _OPENAPI_METADATA_FACTORY() {
        return { currency_code: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.PaypalFee = PaypalFee;
class NetAmount {
    static _OPENAPI_METADATA_FACTORY() {
        return { currency_code: { required: true, type: () => String }, value: { required: true, type: () => String } };
    }
}
exports.NetAmount = NetAmount;
class Payer {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => require("./paypal.entity").Name3 }, email_address: { required: true, type: () => String }, payer_id: { required: true, type: () => String }, address: { required: true, type: () => require("./paypal.entity").Address3 } };
    }
}
exports.Payer = Payer;
class Name3 {
    static _OPENAPI_METADATA_FACTORY() {
        return { given_name: { required: true, type: () => String }, surname: { required: true, type: () => String } };
    }
}
exports.Name3 = Name3;
class Address3 {
    static _OPENAPI_METADATA_FACTORY() {
        return { country_code: { required: true, type: () => String } };
    }
}
exports.Address3 = Address3;
class Link2 {
    static _OPENAPI_METADATA_FACTORY() {
        return { href: { required: true, type: () => String }, rel: { required: true, type: () => String }, method: { required: true, type: () => String } };
    }
}
exports.Link2 = Link2;
//# sourceMappingURL=paypal.entity.js.map