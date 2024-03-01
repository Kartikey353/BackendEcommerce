"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAddress = exports.Address = exports.AddressType = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
var AddressType;
(function (AddressType) {
    AddressType["BILLING"] = "billing";
    AddressType["SHIPPING"] = "shipping";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
class Address extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, default: { required: true, type: () => Boolean }, address: { required: true, type: () => require("./address.entity").UserAddress }, type: { required: true, enum: require("./address.entity").AddressType }, customer: { required: true, type: () => require("../../users/entities/user.entity").User } };
    }
}
exports.Address = Address;
class UserAddress {
    static _OPENAPI_METADATA_FACTORY() {
        return { street_address: { required: true, type: () => String }, country: { required: true, type: () => String }, city: { required: true, type: () => String }, state: { required: true, type: () => String }, zip: { required: true, type: () => String } };
    }
}
exports.UserAddress = UserAddress;
//# sourceMappingURL=address.entity.js.map