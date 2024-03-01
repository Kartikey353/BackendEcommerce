"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyOptions = exports.PaymentGateway = exports.ServerInfo = exports.EmailCustomer = exports.EmailVendor = exports.EmailAdmin = exports.EmailEvent = exports.SmsCustomer = exports.SmsVendor = exports.SmsAdmin = exports.SmsEvent = exports.Location = exports.ShopSocials = exports.ContactDetails = exports.FacebookSettings = exports.GoogleSettings = exports.SeoSettings = exports.LogoSettings = exports.DeliveryTime = exports.SettingsOptions = exports.PromoPopup = exports.PopUpNotShow = exports.Setting = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Setting extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { options: { required: true, type: () => require("./setting.entity").SettingsOptions }, language: { required: true, type: () => String }, translated_languages: { required: true, type: () => [String] } };
    }
}
exports.Setting = Setting;
class PopUpNotShow {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: false, type: () => String }, popUpExpiredIn: { required: false, type: () => Number } };
    }
}
exports.PopUpNotShow = PopUpNotShow;
class PromoPopup {
    static _OPENAPI_METADATA_FACTORY() {
        return { image: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, title: { required: false, type: () => String }, description: { required: false, type: () => String }, popUpDelay: { required: false, type: () => Number }, popUpExpiredIn: { required: false, type: () => Number }, isPopUpNotShow: { required: false, type: () => Boolean }, popUpNotShow: { required: false, type: () => require("./setting.entity").PopUpNotShow } };
    }
}
exports.PromoPopup = PromoPopup;
class SettingsOptions {
    static _OPENAPI_METADATA_FACTORY() {
        return { contactDetails: { required: true, type: () => require("./setting.entity").ContactDetails }, currency: { required: true, type: () => String }, currencyOptions: { required: true, type: () => require("./setting.entity").CurrencyOptions }, currencyToWalletRatio: { required: true, type: () => Number }, defaultAi: { required: true, type: () => String }, defaultPaymentGateway: { required: true, type: () => String }, deliveryTime: { required: true, type: () => [require("./setting.entity").DeliveryTime] }, emailEvent: { required: true, type: () => require("./setting.entity").EmailEvent }, freeShipping: { required: true, type: () => Boolean }, freeShippingAmount: { required: true, type: () => Object }, guestCheckout: { required: true, type: () => Boolean }, isProductReview: { required: true, type: () => Boolean }, logo: { required: true, type: () => require("./setting.entity").LogoSettings }, maximumQuestionLimit: { required: true, type: () => Number }, maxShopDistance: { required: true, type: () => Number }, minimumOrderAmount: { required: true, type: () => Number }, paymentGateway: { required: true, type: () => [require("./setting.entity").PaymentGateway] }, seo: { required: true, type: () => require("./setting.entity").SeoSettings }, server_info: { required: true, type: () => require("./setting.entity").ServerInfo }, shippingClass: { required: true, type: () => Number }, signupPoints: { required: true, type: () => Number }, siteSubtitle: { required: true, type: () => String }, siteTitle: { required: true, type: () => String }, smsEvent: { required: true, type: () => require("./setting.entity").SmsEvent }, StripeCardOnly: { required: true, type: () => Boolean }, taxClass: { required: true, type: () => Number }, useAi: { required: true, type: () => Boolean }, useCashOnDelivery: { required: true, type: () => Boolean }, useEnableGateway: { required: true, type: () => Boolean }, useGoogleMap: { required: true, type: () => Boolean }, useMustVerifyEmail: { required: true, type: () => Boolean }, useOtp: { required: true, type: () => Boolean }, isUnderMaintenance: { required: true, type: () => Boolean }, isPromoPopUp: { required: false, type: () => Boolean }, promoPopup: { required: false, type: () => require("./setting.entity").PromoPopup } };
    }
}
exports.SettingsOptions = SettingsOptions;
class DeliveryTime {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, description: { required: true, type: () => String } };
    }
}
exports.DeliveryTime = DeliveryTime;
class LogoSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, original: { required: true, type: () => String }, thumbnail: { required: true, type: () => String } };
    }
}
exports.LogoSettings = LogoSettings;
class SeoSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { metaTitle: { required: false, type: () => String }, metaDescription: { required: false, type: () => String }, ogTitle: { required: false, type: () => String }, ogDescription: { required: false, type: () => String }, ogImage: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, twitterHandle: { required: false, type: () => String }, twitterCardType: { required: false, type: () => String }, metaTags: { required: false, type: () => String }, canonicalUrl: { required: false, type: () => String } };
    }
}
exports.SeoSettings = SeoSettings;
class GoogleSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { isEnable: { required: true, type: () => Boolean }, tagManagerId: { required: true, type: () => String } };
    }
}
exports.GoogleSettings = GoogleSettings;
class FacebookSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { isEnable: { required: true, type: () => Boolean }, appId: { required: true, type: () => String }, pageId: { required: true, type: () => String } };
    }
}
exports.FacebookSettings = FacebookSettings;
class ContactDetails {
    static _OPENAPI_METADATA_FACTORY() {
        return { socials: { required: true, type: () => [require("./setting.entity").ShopSocials] }, contact: { required: true, type: () => String }, location: { required: true, type: () => require("./setting.entity").Location }, website: { required: true, type: () => String } };
    }
}
exports.ContactDetails = ContactDetails;
class ShopSocials {
    static _OPENAPI_METADATA_FACTORY() {
        return { icon: { required: true, type: () => String }, url: { required: true, type: () => String } };
    }
}
exports.ShopSocials = ShopSocials;
class Location {
    static _OPENAPI_METADATA_FACTORY() {
        return { lat: { required: true, type: () => Number }, lng: { required: true, type: () => Number }, city: { required: false, type: () => String }, state: { required: true, type: () => String }, country: { required: true, type: () => String }, zip: { required: false, type: () => String }, formattedAddress: { required: true, type: () => String } };
    }
}
exports.Location = Location;
class SmsEvent {
    static _OPENAPI_METADATA_FACTORY() {
        return { admin: { required: true, type: () => require("./setting.entity").SmsAdmin }, vendor: { required: true, type: () => require("./setting.entity").SmsVendor }, customer: { required: true, type: () => require("./setting.entity").SmsCustomer } };
    }
}
exports.SmsEvent = SmsEvent;
class SmsAdmin {
    static _OPENAPI_METADATA_FACTORY() {
        return { refundOrder: { required: true, type: () => Boolean }, paymentOrder: { required: true, type: () => Boolean }, statusChangeOrder: { required: true, type: () => Boolean } };
    }
}
exports.SmsAdmin = SmsAdmin;
class SmsVendor {
    static _OPENAPI_METADATA_FACTORY() {
        return { refundOrder: { required: true, type: () => Boolean }, paymentOrder: { required: true, type: () => Boolean }, statusChangeOrder: { required: true, type: () => Boolean } };
    }
}
exports.SmsVendor = SmsVendor;
class SmsCustomer {
    static _OPENAPI_METADATA_FACTORY() {
        return { refundOrder: { required: true, type: () => Boolean }, paymentOrder: { required: true, type: () => Boolean }, statusChangeOrder: { required: true, type: () => Boolean } };
    }
}
exports.SmsCustomer = SmsCustomer;
class EmailEvent {
    static _OPENAPI_METADATA_FACTORY() {
        return { admin: { required: true, type: () => require("./setting.entity").EmailAdmin }, vendor: { required: true, type: () => require("./setting.entity").EmailVendor }, customer: { required: true, type: () => require("./setting.entity").EmailCustomer } };
    }
}
exports.EmailEvent = EmailEvent;
class EmailAdmin {
    static _OPENAPI_METADATA_FACTORY() {
        return { refundOrder: { required: true, type: () => Boolean }, paymentOrder: { required: true, type: () => Boolean }, statusChangeOrder: { required: true, type: () => Boolean } };
    }
}
exports.EmailAdmin = EmailAdmin;
class EmailVendor {
    static _OPENAPI_METADATA_FACTORY() {
        return { refundOrder: { required: true, type: () => Boolean }, createReview: { required: true, type: () => Boolean }, paymentOrder: { required: true, type: () => Boolean }, createQuestion: { required: true, type: () => Boolean }, statusChangeOrder: { required: true, type: () => Boolean } };
    }
}
exports.EmailVendor = EmailVendor;
class EmailCustomer {
    static _OPENAPI_METADATA_FACTORY() {
        return { refundOrder: { required: true, type: () => Boolean }, paymentOrder: { required: true, type: () => Boolean }, answerQuestion: { required: true, type: () => Boolean }, statusChangeOrder: { required: true, type: () => Boolean } };
    }
}
exports.EmailCustomer = EmailCustomer;
class ServerInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { memory_limit: { required: true, type: () => String }, post_max_size: { required: true, type: () => Number }, max_input_time: { required: true, type: () => String }, max_execution_time: { required: true, type: () => String }, upload_max_filesize: { required: true, type: () => Number } };
    }
}
exports.ServerInfo = ServerInfo;
class PaymentGateway {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, title: { required: true, type: () => String } };
    }
}
exports.PaymentGateway = PaymentGateway;
class CurrencyOptions {
    static _OPENAPI_METADATA_FACTORY() {
        return { formation: { required: true, type: () => String }, fractions: { required: true, type: () => Number } };
    }
}
exports.CurrencyOptions = CurrencyOptions;
//# sourceMappingURL=setting.entity.js.map