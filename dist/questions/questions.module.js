"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModule = void 0;
const common_1 = require("@nestjs/common");
const my_questions_controller_1 = require("./my-questions.controller");
const my_questions_service_1 = require("./my-questions.service");
const questions_controller_1 = require("./questions.controller");
const questions_service_1 = require("./questions.service");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    (0, common_1.Module)({
        controllers: [questions_controller_1.QuestionController, my_questions_controller_1.MyQuestionsController],
        providers: [questions_service_1.QuestionService, my_questions_service_1.MyQuestionsService],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=questions.module.js.map