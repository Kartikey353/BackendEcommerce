"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStoreNoticeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_store_notice_dto_1 = require("./create-store-notice.dto");
class UpdateStoreNoticeDto extends (0, swagger_1.PartialType)(create_store_notice_dto_1.CreateStoreNoticeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateStoreNoticeDto = UpdateStoreNoticeDto;
//# sourceMappingURL=update-store-notice.dto.js.map