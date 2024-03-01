"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = exports.User = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class User extends core_entity_1.CoreEntity {
    constructor() {
        super(...arguments);
        this.is_active = true;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: false, type: () => String }, profile: { required: false, type: () => require("./profile.entity").Profile }, shops: { required: false, type: () => [require("../../shops/entities/shop.entity").Shop] }, managed_shop: { required: false, type: () => require("../../shops/entities/shop.entity").Shop }, is_active: { required: false, type: () => Boolean, default: true }, address: { required: false, type: () => [require("../../addresses/entities/address.entity").Address] }, permissions: { required: false, type: () => [require("./user.entity").Permission] }, wallet: { required: false, type: () => Object } };
    }
}
exports.User = User;
class Permission extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: false, type: () => String }, guard_name: { required: false, type: () => String }, pivot: { required: false, type: () => Object } };
    }
}
exports.Permission = Permission;
//# sourceMappingURL=user.entity.js.map