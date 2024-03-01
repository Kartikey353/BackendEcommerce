"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingType = exports.Shipping = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Shipping extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, amount: { required: true, type: () => Number }, is_global: { required: true, type: () => Boolean }, type: { required: true, enum: require("./shipping.entity").ShippingType } };
    }
}
exports.Shipping = Shipping;
var ShippingType;
(function (ShippingType) {
    ShippingType["FIXED"] = "fixed";
    ShippingType["PERCENTAGE"] = "percentage";
    ShippingType["FREE"] = "free";
})(ShippingType = exports.ShippingType || (exports.ShippingType = {}));
//# sourceMappingURL=shipping.entity.js.map