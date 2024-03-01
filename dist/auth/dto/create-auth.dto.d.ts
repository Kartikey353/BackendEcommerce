import { CoreMutationOutput } from 'src/common/dto/core-mutation-output.dto';
import { User } from 'src/users/entities/user.entity';
declare enum Permission {
    SUPER_ADMIN = "Super admin",
    STORE_OWNER = "Store owner",
    STAFF = "Staff",
    CUSTOMER = "Customer"
}
declare const RegisterDto_base: import("@nestjs/common").Type<Pick<User, "name" | "email" | "password">>;
export declare class RegisterDto extends RegisterDto_base {
    permission: Permission;
}
declare const LoginDto_base: import("@nestjs/common").Type<Partial<Pick<User, keyof User>>>;
export declare class LoginDto extends LoginDto_base {
}
export declare class SocialLoginDto {
    provider: string;
    access_token: string;
}
export declare class ChangePasswordDto {
    oldPassword: string;
    newPassword: string;
}
export declare class ForgetPasswordDto {
    email: string;
}
export declare class VerifyForgetPasswordDto {
    email: string;
    token: string;
}
export declare class ResetPasswordDto {
    email: string;
    token: string;
    password: string;
}
export declare class AuthResponse {
    token: string;
    permissions: string[];
    role?: string;
}
export declare class CoreResponse extends CoreMutationOutput {
}
export declare class VerifyOtpDto {
    otp_id: string;
    code: string;
    phone_number: string;
}
export declare class OtpResponse {
    id: string;
    message: string;
    success: boolean;
    phone_number: string;
    provider: string;
    is_contact_exist: boolean;
}
export declare class OtpDto {
    phone_number: string;
}
export declare class OtpLoginDto {
    otp_id: string;
    code: string;
    phone_number: string;
    name?: string;
    email?: string;
}
export {};
