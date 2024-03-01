"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWishlistDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_wishlists_dto_1 = require("./create-wishlists.dto");
class UpdateWishlistDto extends (0, swagger_1.PartialType)(create_wishlists_dto_1.CreateWishlistDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateWishlistDto = UpdateWishlistDto;
//# sourceMappingURL=update-wishlists.dto.js.map