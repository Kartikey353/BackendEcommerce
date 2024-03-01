"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Wishlist extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { product: { required: true, type: () => require("../../products/entities/product.entity").Product }, product_id: { required: true, type: () => String }, user: { required: true, type: () => [require("../../users/entities/user.entity").User] }, user_id: { required: true, type: () => String } };
    }
}
exports.Wishlist = Wishlist;
//# sourceMappingURL=wishlist.entity.js.map