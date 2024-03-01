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
exports.WithdrawsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const withdraw_entity_1 = require("./entities/withdraw.entity");
const withdraws_json_1 = __importDefault(require("../db/pickbazar/withdraws.json"));
const paginate_1 = require("../common/pagination/paginate");
const withdraws = (0, class_transformer_1.plainToClass)(withdraw_entity_1.Withdraw, withdraws_json_1.default);
let WithdrawsService = class WithdrawsService {
    constructor() {
        this.withdraws = withdraws;
    }
    create(createWithdrawDto) {
        return Object.assign({ id: this.withdraws.length + 1 }, createWithdrawDto);
    }
    getWithdraws({ limit, page, status, shop_id, }) {
        if (!page)
            page = 1;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        let data = this.withdraws;
        if (shop_id) {
            data = this.withdraws.filter((p) => p.shop_id === shop_id);
        }
        const results = data.slice(startIndex, endIndex);
        const url = `/withdraws?limit=${limit}`;
        return Object.assign({ data: results }, (0, paginate_1.paginate)(data.length, page, limit, results.length, url));
    }
    findOne(id) {
        return `This action returns a #${id} withdraw`;
    }
    update(id, updateWithdrawDto) {
        return this.withdraws[0];
    }
    remove(id) {
        return `This action removes a #${id} withdraw`;
    }
};
WithdrawsService = __decorate([
    (0, common_1.Injectable)()
], WithdrawsService);
exports.WithdrawsService = WithdrawsService;
//# sourceMappingURL=withdraws.service.js.map