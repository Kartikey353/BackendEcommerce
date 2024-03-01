"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeedBackDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_feedback_dto_1 = require("./create-feedback.dto");
class UpdateFeedBackDto extends (0, swagger_1.PartialType)(create_feedback_dto_1.CreateFeedBackDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFeedBackDto = UpdateFeedBackDto;
//# sourceMappingURL=update-feedback.dto.js.map