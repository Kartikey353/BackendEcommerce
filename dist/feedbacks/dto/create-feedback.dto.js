"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedBackDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const feedback_entity_1 = require("../entities/feedback.entity");
class CreateFeedBackDto extends (0, swagger_1.PickType)(feedback_entity_1.Feedback, [
    'model_id',
    'model_type',
    'positive',
    'negative',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateFeedBackDto = CreateFeedBackDto;
//# sourceMappingURL=create-feedback.dto.js.map