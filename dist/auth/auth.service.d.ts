import { AuthResponse, ChangePasswordDto, ForgetPasswordDto, LoginDto, CoreResponse, RegisterDto, ResetPasswordDto, VerifyForgetPasswordDto, SocialLoginDto, OtpLoginDto, OtpResponse, VerifyOtpDto, OtpDto } from './dto/create-auth.dto';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private users;
    register(createUserInput: RegisterDto): Promise<AuthResponse>;
    login(loginInput: LoginDto): Promise<AuthResponse>;
    changePassword(changePasswordInput: ChangePasswordDto): Promise<CoreResponse>;
    forgetPassword(forgetPasswordInput: ForgetPasswordDto): Promise<CoreResponse>;
    verifyForgetPasswordToken(verifyForgetPasswordTokenInput: VerifyForgetPasswordDto): Promise<CoreResponse>;
    resetPassword(resetPasswordInput: ResetPasswordDto): Promise<CoreResponse>;
    socialLogin(socialLoginDto: SocialLoginDto): Promise<AuthResponse>;
    otpLogin(otpLoginDto: OtpLoginDto): Promise<AuthResponse>;
    verifyOtpCode(verifyOtpInput: VerifyOtpDto): Promise<CoreResponse>;
    sendOtpCode(otpInput: OtpDto): Promise<OtpResponse>;
    me(): User;
}
