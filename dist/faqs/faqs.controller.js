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
exports.FaqsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const faqs_service_1 = require("./faqs.service");
const get_faqs_dto_1 = require("./dto/get-faqs.dto");
const create_faq_dto_1 = require("./dto/create-faq.dto");
const update_faq_dto_1 = require("./dto/update-faq.dto");
let FaqsController = class FaqsController {
    constructor(faqService) {
        this.faqService = faqService;
    }
    createFaq(createFaqDto) {
        return this.faqService.create(createFaqDto);
    }
    findAll(query) {
        return this.faqService.findAllFaqs(query);
    }
    getFaq(param, language) {
        return this.faqService.getFaq(param, language);
    }
    update(id, language, updateFaqDto) {
        return this.faqService.update(+id, updateFaqDto);
    }
    deleteFaq(id) {
        return this.faqService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/faq.entity").Faq }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_faq_dto_1.CreateFaqDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "createFaq", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_faqs_dto_1.GetFaqsDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':param'),
    openapi.ApiResponse({ status: 200, type: require("./entities/faq.entity").Faq }),
    __param(0, (0, common_1.Param)('param')),
    __param(1, (0, common_1.Query)('language')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "getFaq", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/faq.entity").Faq }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('language')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_faq_dto_1.UpdateFaqDto]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FaqsController.prototype, "deleteFaq", null);
FaqsController = __decorate([
    (0, common_1.Controller)('faqs'),
    __metadata("design:paramtypes", [faqs_service_1.FaqsService])
], FaqsController);
exports.FaqsController = FaqsController;
//# sourceMappingURL=faqs.controller.js.map