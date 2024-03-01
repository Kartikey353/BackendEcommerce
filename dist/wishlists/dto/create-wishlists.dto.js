"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWishlistDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const wishlist_entity_1 = require("../entities/wishlist.entity");
class CreateWishlistDto extends (0, swagger_1.PickType)(wishlist_entity_1.Wishlist, ['product_id']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateWishlistDto = CreateWishlistDto;
//# sourceMappingURL=create-wishlists.dto.js.map