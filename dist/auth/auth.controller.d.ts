import { AuthService } from './auth.service';
import { ChangePasswordDto, ForgetPasswordDto, LoginDto, OtpDto, OtpLoginDto, RegisterDto, ResetPasswordDto, SocialLoginDto, VerifyForgetPasswordDto, VerifyOtpDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createAccount(registerDto: RegisterDto): Promise<import("./dto/create-auth.dto").AuthResponse>;
    login(loginDto: LoginDto): Promise<import("./dto/create-auth.dto").AuthResponse>;
    socialLogin(socialLoginDto: SocialLoginDto): Promise<import("./dto/create-auth.dto").AuthResponse>;
    otpLogin(otpLoginDto: OtpLoginDto): Promise<import("./dto/create-auth.dto").AuthResponse>;
    sendOtpCode(otpDto: OtpDto): Promise<import("./dto/create-auth.dto").OtpResponse>;
    verifyOtpCode(verifyOtpDto: VerifyOtpDto): Promise<import("./dto/create-auth.dto").CoreResponse>;
    forgetPassword(forgetPasswordDto: ForgetPasswordDto): Promise<import("./dto/create-auth.dto").CoreResponse>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<import("./dto/create-auth.dto").CoreResponse>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<import("./dto/create-auth.dto").CoreResponse>;
    logout(): Promise<boolean>;
    verifyForgetPassword(verifyForgetPasswordDto: VerifyForgetPasswordDto): Promise<import("./dto/create-auth.dto").CoreResponse>;
    me(): import("../users/entities/user.entity").User;
    addWalletPoints(addPointsDto: any): import("../users/entities/user.entity").User;
    contactUs(addPointsDto: any): {
        success: boolean;
        message: string;
    };
}
