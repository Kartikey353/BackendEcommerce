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
exports.NewslettersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const newsletters_service_1 = require("./newsletters.service");
const create_new_subscriber_dto_1 = require("./dto/create-new-subscriber.dto");
let NewslettersController = class NewslettersController {
    constructor(newslettersService) {
        this.newslettersService = newslettersService;
    }
    async subscribeToNewsletter(body) {
        return this.newslettersService.subscribeToNewsletter(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_new_subscriber_dto_1.CreateNewSubscriberDto]),
    __metadata("design:returntype", Promise)
], NewslettersController.prototype, "subscribeToNewsletter", null);
NewslettersController = __decorate([
    (0, common_1.Controller)('subscribe-to-newsletter'),
    __metadata("design:paramtypes", [newsletters_service_1.NewslettersService])
], NewslettersController);
exports.NewslettersController = NewslettersController;
//# sourceMappingURL=newsletters.controller.js.map