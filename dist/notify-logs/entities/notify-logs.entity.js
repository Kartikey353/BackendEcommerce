"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyLogs = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class NotifyLogs extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { receiver: { required: true, type: () => String }, sender: { required: true, type: () => String }, notify_type: { required: true, type: () => String }, notify_receiver_type: { required: true, type: () => String }, is_read: { required: true, type: () => Boolean }, notify_text: { required: true, type: () => String } };
    }
}
exports.NotifyLogs = NotifyLogs;
//# sourceMappingURL=notify-logs.entity.js.map