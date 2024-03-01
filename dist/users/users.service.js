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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const fuse_js_1 = __importDefault(require("fuse.js"));
const user_entity_1 = require("./entities/user.entity");
const users_json_1 = __importDefault(require("../db/pickbazar/users.json"));
const paginate_1 = require("../common/pagination/paginate");
const users = (0, class_transformer_1.plainToClass)(user_entity_1.User, users_json_1.default);
const options = {
    keys: ['name', 'type.slug', 'categories.slug', 'status'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(users, options);
let UsersService = class UsersService {
    constructor() {
        this.users = users;
    }
    create(createUserDto) {
        return this.users[0];
    }
    async getUsers({ text, limit, page, search, }) {
        var _a, _b;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.users;
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        if (search) {
            const parseSearchParams = search.split(';');
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_b = fuse
                .search({
                $and: searchText,
            })) === null || _b === void 0 ? void 0 : _b.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/users?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    getUsersNotify({ limit }) {
        const data = this.users;
        return data === null || data === void 0 ? void 0 : data.slice(0, limit);
    }
    findOne(id) {
        return this.users.find((user) => user.id === id);
    }
    update(id, updateUserDto) {
        return this.users[0];
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    makeAdmin(user_id) {
        return this.users.find((u) => u.id === Number(user_id));
    }
    banUser(id) {
        const user = this.users.find((u) => u.id === Number(id));
        user.is_active = !user.is_active;
        return user;
    }
    activeUser(id) {
        const user = this.users.find((u) => u.id === Number(id));
        user.is_active = !user.is_active;
        return user;
    }
    async getAdmin({ text, limit, page, search, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.users.filter(function (element) {
            return element.permissions.some(function (subElement) {
                return subElement.name === 'super_admin';
            });
        });
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/admin/list?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    async getVendors({ text, limit, page, search, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.users.filter(function (element) {
            return element.permissions.some(function (subElement) {
                return subElement.name === 'store_owner';
            });
        });
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/vendors/list?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    async getAllCustomers({ text, limit, page, search, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.users.filter(function (element) {
            return element.permissions.some(function (subElement) {
                return subElement.name === 'customer';
            });
        });
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/customers/list?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    async getMyStaffs({ text, limit, page, search, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = [];
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/my-staffs/list?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    async getAllStaffs({ text, limit, page, search, }) {
        var _a;
        if (!page)
            page = 1;
        if (!limit)
            limit = 30;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = [];
        if (text === null || text === void 0 ? void 0 : text.replace(/%/g, '')) {
            data = (_a = fuse.search(text)) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/all-staffs/list?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map