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
exports.ConversationsService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const conversations_json_1 = __importDefault(require("../db/pickbazar/conversations.json"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const paginate_1 = require("../common/pagination/paginate");
const conversation_entity_1 = require("./entities/conversation.entity");
const conversations = (0, class_transformer_1.plainToClass)(conversation_entity_1.Conversation, conversations_json_1.default);
const options = {
    keys: ['shop.name'],
    threshold: 0.3,
};
const fuse = new fuse_js_1.default(conversations, options);
let ConversationsService = class ConversationsService {
    constructor() {
        this.conversations = conversations;
    }
    create(createConversationDto) {
        return this.conversations[0];
    }
    getAllConversations({ page, limit, search }) {
        var _a;
        if (!page)
            page = 1;
        let data = this.conversations;
        if (search) {
            const parseSearchParams = search.split(';');
            const test = data.filter((p) => p.shop.name);
            const searchText = [];
            for (const searchParam of parseSearchParams) {
                const [key, value] = searchParam.split(':');
                if (key !== 'slug') {
                    searchText.push({
                        [key]: value,
                    });
                }
            }
            data = (_a = fuse
                .search({
                $and: searchText,
            })) === null || _a === void 0 ? void 0 : _a.map(({ item }) => item);
        }
        const url = `/conversations?limit=${limit}`;
        return Object.assign({ data }, (0, paginate_1.paginate)(this.conversations.length, page, limit, this.conversations.length, url));
    }
    getConversation(param) {
        return this.conversations.find((p) => Number(p.latest_message.conversation_id) === Number(param));
    }
};
ConversationsService = __decorate([
    (0, common_1.Injectable)()
], ConversationsService);
exports.ConversationsService = ConversationsService;
//# sourceMappingURL=conversations.service.js.map