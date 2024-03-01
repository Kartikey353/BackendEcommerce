"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../entities/user.entity");
var Permission;
(function (Permission) {
    Permission["SUPER_ADMIN"] = "Super admin";
    Permission["STORE_OWNER"] = "Store owner";
    Permission["STAFF"] = "Staff";
    Permission["CUSTOMER"] = "Customer";
})(Permission || (Permission = {}));
class CreateUserDto extends (0, swagger_1.PickType)(user_entity_1.User, [
    'name',
    'email',
    'password',
]) {
    constructor() {
        super(...arguments);
        this.permission = Permission.CUSTOMER;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { address: { required: true, type: () => [require("../../addresses/dto/create-address.dto").CreateAddressDto] }, profile: { required: true, type: () => require("./create-profile.dto").CreateProfileDto }, permission: { required: true, default: Permission.CUSTOMER, enum: Permission } };
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map