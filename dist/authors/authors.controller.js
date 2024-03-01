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
exports.TopAuthors = exports.AuthorsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const authors_service_1 = require("./authors.service");
const get_author_dto_1 = require("./dto/get-author.dto");
const get_top_authors_dto_1 = require("./dto/get-top-authors.dto");
const update_author_dto_1 = require("./dto/update-author.dto");
const create_author_dto_1 = require("./dto/create-author.dto");
let AuthorsController = class AuthorsController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    createAuthor(createAuthorDto) {
        return this.authorsService.create(createAuthorDto);
    }
    async getAuthors(query) {
        return this.authorsService.getAuthors(query);
    }
    async getAuthorBySlug(slug) {
        return this.authorsService.getAuthorBySlug(slug);
    }
    update(id, updateAuthorDto) {
        return this.authorsService.update(+id, updateAuthorDto);
    }
    remove(id) {
        return this.authorsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/author.entity").Author }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/get-author.dto").AuthorPaginator }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_author_dto_1.GetAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "getAuthors", null);
__decorate([
    (0, common_1.Get)(':slug'),
    openapi.ApiResponse({ status: 200, type: require("./entities/author.entity").Author }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "getAuthorBySlug", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/author.entity").Author }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_author_dto_1.UpdateAuthorDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "remove", null);
AuthorsController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService])
], AuthorsController);
exports.AuthorsController = AuthorsController;
let TopAuthors = class TopAuthors {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    getTopAuthors(query) {
        return this.authorsService.getTopAuthors(query);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/author.entity").Author] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_top_authors_dto_1.GetTopAuthorsDto]),
    __metadata("design:returntype", Promise)
], TopAuthors.prototype, "getTopAuthors", null);
TopAuthors = __decorate([
    (0, common_1.Controller)('top-authors'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService])
], TopAuthors);
exports.TopAuthors = TopAuthors;
//# sourceMappingURL=authors.controller.js.map