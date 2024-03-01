"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpLoginDto = exports.OtpDto = exports.OtpResponse = exports.VerifyOtpDto = exports.CoreResponse = exports.AuthResponse = exports.ResetPasswordDto = exports.VerifyForgetPasswordDto = exports.ForgetPasswordDto = exports.ChangePasswordDto = exports.SocialLoginDto = exports.LoginDto = exports.RegisterDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const core_mutation_output_dto_1 = require("../../common/dto/core-mutation-output.dto");
const user_entity_1 = require("../../users/entities/user.entity");
var Permission;
(function (Permission) {
    Permission["SUPER_ADMIN"] = "Super admin";
    Permission["STORE_OWNER"] = "Store owner";
    Permission["STAFF"] = "Staff";
    Permission["CUSTOMER"] = "Customer";
})(Permission || (Permission = {}));
class RegisterDto extends (0, swagger_1.PickType)(user_entity_1.User, ['name', 'email', 'password']) {
    constructor() {
        super(...arguments);
        this.permission = Permission.CUSTOMER;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { permission: { required: true, default: Permission.CUSTOMER, enum: Permission } };
    }
}
exports.RegisterDto = RegisterDto;
class LoginDto extends (0, swagger_1.PartialType)((0, swagger_1.PickType)(user_entity_1.User, ['email', 'password'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.LoginDto = LoginDto;
class SocialLoginDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { provider: { required: true, type: () => String }, access_token: { required: true, type: () => String } };
    }
}
exports.SocialLoginDto = SocialLoginDto;
class ChangePasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { oldPassword: { required: true, type: () => String }, newPassword: { required: true, type: () => String } };
    }
}
exports.ChangePasswordDto = ChangePasswordDto;
class ForgetPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String } };
    }
}
exports.ForgetPasswordDto = ForgetPasswordDto;
class VerifyForgetPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, token: { required: true, type: () => String } };
    }
}
exports.VerifyForgetPasswordDto = VerifyForgetPasswordDto;
class ResetPasswordDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, token: { required: true, type: () => String }, password: { required: true, type: () => String } };
    }
}
exports.ResetPasswordDto = ResetPasswordDto;
class AuthResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { token: { required: true, type: () => String }, permissions: { required: true, type: () => [String] }, role: { required: false, type: () => String } };
    }
}
exports.AuthResponse = AuthResponse;
class CoreResponse extends core_mutation_output_dto_1.CoreMutationOutput {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CoreResponse = CoreResponse;
class VerifyOtpDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { otp_id: { required: true, type: () => String }, code: { required: true, type: () => String }, phone_number: { required: true, type: () => String } };
    }
}
exports.VerifyOtpDto = VerifyOtpDto;
class OtpResponse {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, message: { required: true, type: () => String }, success: { required: true, type: () => Boolean }, phone_number: { required: true, type: () => String }, provider: { required: true, type: () => String }, is_contact_exist: { required: true, type: () => Boolean } };
    }
}
exports.OtpResponse = OtpResponse;
class OtpDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { phone_number: { required: true, type: () => String } };
    }
}
exports.OtpDto = OtpDto;
class OtpLoginDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { otp_id: { required: true, type: () => String }, code: { required: true, type: () => String }, phone_number: { required: true, type: () => String }, name: { required: false, type: () => String }, email: { required: false, type: () => String } };
    }
}
exports.OtpLoginDto = OtpLoginDto;
//# sourceMappingURL=create-auth.dto.js.map