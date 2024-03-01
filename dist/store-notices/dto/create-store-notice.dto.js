"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStoreNoticeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const store_notices_entity_1 = require("../entities/store-notices.entity");
class CreateStoreNoticeDto extends (0, swagger_1.PickType)(store_notices_entity_1.StoreNotice, [
    'notice',
    'description',
    'expired_at',
    'effective_from',
    'priority',
    'type',
    'received_by',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateStoreNoticeDto = CreateStoreNoticeDto;
//# sourceMappingURL=create-store-notice.dto.js.map