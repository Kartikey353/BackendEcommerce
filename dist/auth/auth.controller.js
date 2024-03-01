"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_auth_dto_1 = require("./dto/create-auth.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    createAccount(registerDto) {
        return this.authService.register(registerDto);
    }
    login(loginDto) {
        return this.authService.login(loginDto);
    }
    socialLogin(socialLoginDto) {
        return this.authService.socialLogin(socialLoginDto);
    }
    otpLogin(otpLoginDto) {
        return this.authService.otpLogin(otpLoginDto);
    }
    sendOtpCode(otpDto) {
        return this.authService.sendOtpCode(otpDto);
    }
    verifyOtpCode(verifyOtpDto) {
        return this.authService.verifyOtpCode(verifyOtpDto);
    }
    forgetPassword(forgetPasswordDto) {
        return this.authService.forgetPassword(forgetPasswordDto);
    }
    resetPassword(resetPasswordDto) {
        return this.authService.resetPassword(resetPasswordDto);
    }
    changePassword(changePasswordDto) {
        return this.authService.changePassword(changePasswordDto);
    }
    async logout() {
        return true;
    }
    verifyForgetPassword(verifyForgetPasswordDto) {
        return this.authService.verifyForgetPasswordToken(verifyForgetPasswordDto);
    }
    me() {
        return this.authService.me();
    }
    addWalletPoints(addPointsDto) {
        return this.authService.me();
    }
    contactUs(addPointsDto) {
        return {
            success: true,
            message: 'Thank you for contacting us. We will get back to you soon.',
        };
    }
};
__decorate([
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").AuthResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Post)('token'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").AuthResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('social-login-token'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").AuthResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.SocialLoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "socialLogin", null);
__decorate([
    (0, common_1.Post)('otp-login'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").AuthResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.OtpLoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "otpLogin", null);
__decorate([
    (0, common_1.Post)('send-otp-code'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").OtpResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.OtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "sendOtpCode", null);
__decorate([
    (0, common_1.Post)('verify-otp-code'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").CoreResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.VerifyOtpDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyOtpCode", null);
__decorate([
    (0, common_1.Post)('forget-password'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").CoreResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.ForgetPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").CoreResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('change-password'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").CoreResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('logout'),
    openapi.ApiResponse({ status: 201, type: Boolean }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('verify-forget-password-token'),
    openapi.ApiResponse({ status: 201, type: require("./dto/create-auth.dto").CoreResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_dto_1.VerifyForgetPasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyForgetPassword", null);
__decorate([
    (0, common_1.Get)('me'),
    openapi.ApiResponse({ status: 200, type: require("../users/entities/user.entity").User }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
__decorate([
    (0, common_1.Post)('add-points'),
    openapi.ApiResponse({ status: 201, type: require("../users/entities/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "addWalletPoints", null);
__decorate([
    (0, common_1.Post)('contact-us'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "contactUs", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map