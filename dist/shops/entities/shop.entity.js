"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSettings = exports.PaymentInfo = exports.Balance = exports.Shop = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Shop extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { owner_id: { required: true, type: () => Number }, owner: { required: true, type: () => require("../../users/entities/user.entity").User }, staffs: { required: false, type: () => [require("../../users/entities/user.entity").User] }, is_active: { required: true, type: () => Boolean }, orders_count: { required: true, type: () => Number }, products_count: { required: true, type: () => Number }, balance: { required: false, type: () => require("./shop.entity").Balance }, name: { required: true, type: () => String }, slug: { required: true, type: () => String }, description: { required: false, type: () => String }, cover_image: { required: true, type: () => require("../../common/entities/attachment.entity").Attachment }, logo: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, address: { required: true, type: () => require("../../addresses/entities/address.entity").UserAddress }, settings: { required: false, type: () => require("./shop.entity").ShopSettings }, distance: { required: false, type: () => String }, lat: { required: false, type: () => String }, lng: { required: false, type: () => String } };
    }
}
exports.Shop = Shop;
class Balance {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, admin_commission_rate: { required: true, type: () => Number }, shop: { required: true, type: () => require("./shop.entity").Shop }, total_earnings: { required: true, type: () => Number }, withdrawn_amount: { required: true, type: () => Number }, current_balance: { required: true, type: () => Number }, payment_info: { required: true, type: () => require("./shop.entity").PaymentInfo } };
    }
}
exports.Balance = Balance;
class PaymentInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { account: { required: true, type: () => String }, name: { required: true, type: () => String }, email: { required: true, type: () => String }, bank: { required: true, type: () => String } };
    }
}
exports.PaymentInfo = PaymentInfo;
class ShopSettings {
    static _OPENAPI_METADATA_FACTORY() {
        return { socials: { required: true, type: () => [require("../../settings/entities/setting.entity").ShopSocials] }, contact: { required: true, type: () => String }, location: { required: true, type: () => require("../../settings/entities/setting.entity").Location }, website: { required: true, type: () => String } };
    }
}
exports.ShopSettings = ShopSettings;
//# sourceMappingURL=shop.entity.js.map