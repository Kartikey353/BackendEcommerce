"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Social = exports.Profile = void 0;
const openapi = require("@nestjs/swagger");
const core_entity_1 = require("../../common/entities/core.entity");
class Profile extends core_entity_1.CoreEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { avatar: { required: false, type: () => require("../../common/entities/attachment.entity").Attachment }, bio: { required: false, type: () => String }, socials: { required: false, type: () => [require("./profile.entity").Social] }, contact: { required: false, type: () => String }, customer: { required: false, type: () => require("./user.entity").User } };
    }
}
exports.Profile = Profile;
class Social {
    static _OPENAPI_METADATA_FACTORY() {
        return { type: { required: true, type: () => String }, link: { required: true, type: () => String } };
    }
}
exports.Social = Social;
//# sourceMappingURL=profile.entity.js.map