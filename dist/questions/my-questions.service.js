"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyQuestionsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const question_entity_1 = require("./entities/question.entity");
const questions_json_1 = __importDefault(require("../db/pickbazar/questions.json"));
const myQuestions = (0, class_transformer_1.plainToClass)(question_entity_1.Question, questions_json_1.default);
const options = {
    keys: ['answer'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(myQuestions, options);
let MyQuestionsService = class MyQuestionsService {
    constructor() {
        this.myQuestion = myQuestions;
    }
    findMyQuestions({ limit, page, search, answer }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 8;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.myQuestion;
        if (search) {
            const parseSearchParams = search.split(';');
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                data = (_a = fuse.search(value)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
            }
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/my-questions?with=user&orderBy=created_at&sortedBy=desc`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    findMyQuestion(id) {
        return this.myQuestion.find((p) => p.id === id);
    }
    create(createQuestionDto) {
        return this.myQuestion[0];
    }
    update(id, updateQuestionDto) {
        return this.myQuestion[0];
    }
    delete(id) {
        return this.myQuestion[0];
    }
};
MyQuestionsService = __decorate([
    (0, common_1.Injectable)()
], MyQuestionsService);
exports.MyQuestionsService = MyQuestionsService;
//# sourceMappingURL=my-questions.service.js.map