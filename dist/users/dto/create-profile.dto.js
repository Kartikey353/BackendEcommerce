"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectBelongsTo = exports.CreateProfileDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const profile_entity_1 = require("../entities/profile.entity");
class CreateProfileDto extends (0, swagger_1.PickType)(profile_entity_1.Profile, [
    'avatar',
    'bio',
    'socials',
    'contact',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { customer: { required: true, type: () => require("./create-profile.dto").ConnectBelongsTo } };
    }
}
exports.CreateProfileDto = CreateProfileDto;
class ConnectBelongsTo {
    static _OPENAPI_METADATA_FACTORY() {
        return { connect: { required: true, type: () => Number } };
    }
}
exports.ConnectBelongsTo = ConnectBelongsTo;
//# sourceMappingURL=create-profile.dto.js.map