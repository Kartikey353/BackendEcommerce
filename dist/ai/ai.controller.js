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
exports.AiController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const create_ai_dto_1 = require("./dto/create-ai.dto");
let AiController = class AiController {
    constructor(aiService) {
        this.aiService = aiService;
    }
    create(createAiDto) {
        return this.aiService.create(createAiDto);
    }
};
__decorate([
    (0, common_1.Post)('generate-descriptions'),
    openapi.ApiResponse({ status: 201, type: require("./entities/ai.entity").Ai }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ai_dto_1.CreateAiDto]),
    __metadata("design:returntype", void 0)
], AiController.prototype, "create", null);
AiController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
exports.AiController = AiController;
//# sourceMappingURL=ai.controller.js.map