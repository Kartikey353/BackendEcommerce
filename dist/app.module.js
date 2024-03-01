"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const messages_module_1 = require("./messages/messages.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nestjs_stripe_1 = require("nestjs-stripe");
const addresses_module_1 = require("./addresses/addresses.module");
const analytics_module_1 = require("./analytics/analytics.module");
const attributes_module_1 = require("./attributes/attributes.module");
const auth_module_1 = require("./auth/auth.module");
const authors_module_1 = require("./authors/authors.module");
const categories_module_1 = require("./categories/categories.module");
const common_module_1 = require("./common/common.module");
const coupons_module_1 = require("./coupons/coupons.module");
const feedbacks_module_1 = require("./feedbacks/feedbacks.module");
const imports_module_1 = require("./imports/imports.module");
const manufacturers_module_1 = require("./manufacturers/manufacturers.module");
const newsletters_module_1 = require("./newsletters/newsletters.module");
const orders_module_1 = require("./orders/orders.module");
const payment_intent_module_1 = require("./payment-intent/payment-intent.module");
const payment_method_module_1 = require("./payment-method/payment-method.module");
const payment_module_1 = require("./payment/payment.module");
const products_module_1 = require("./products/products.module");
const questions_module_1 = require("./questions/questions.module");
const refunds_module_1 = require("./refunds/refunds.module");
const reports_module_1 = require("./reports/reports.module");
const reviews_module_1 = require("./reviews/reviews.module");
const settings_module_1 = require("./settings/settings.module");
const shippings_module_1 = require("./shippings/shippings.module");
const shops_module_1 = require("./shops/shops.module");
const tags_module_1 = require("./tags/tags.module");
const taxes_module_1 = require("./taxes/taxes.module");
const types_module_1 = require("./types/types.module");
const uploads_module_1 = require("./uploads/uploads.module");
const users_module_1 = require("./users/users.module");
const web_hook_module_1 = require("./web-hook/web-hook.module");
const wishlists_module_1 = require("./wishlists/wishlists.module");
const withdraws_module_1 = require("./withdraws/withdraws.module");
const store_notices_module_1 = require("./store-notices/store-notices.module");
const conversations_module_1 = require("./conversations/conversations.module");
const ai_module_1 = require("./ai/ai.module");
const faqs_module_1 = require("./faqs/faqs.module");
const terms_and_conditions_module_1 = require("./terms-and-conditions/terms-and-conditions.module");
const flash_sale_module_1 = require("./flash-sale/flash-sale.module");
const refund_policies_module_1 = require("./refund-policies/refund-policies.module");
const refund_reasons_module_1 = require("./refund-reasons/refund-reasons.module");
const notify_logs_module_1 = require("./notify-logs/notify-logs.module");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: [".local.env"]
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({ uri: configService.get("MONGO_URI") })
            }),
            nestjs_stripe_1.StripeModule.forRoot({
                apiKey: process.env.STRIPE_API_KEY,
                apiVersion: '2022-11-15',
            }),
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            products_module_1.ProductsModule,
            orders_module_1.OrdersModule,
            categories_module_1.CategoriesModule,
            analytics_module_1.AnalyticsModule,
            attributes_module_1.AttributesModule,
            shippings_module_1.ShippingsModule,
            taxes_module_1.TaxesModule,
            tags_module_1.TagsModule,
            shops_module_1.ShopsModule,
            types_module_1.TypesModule,
            withdraws_module_1.WithdrawsModule,
            uploads_module_1.UploadsModule,
            settings_module_1.SettingsModule,
            coupons_module_1.CouponsModule,
            addresses_module_1.AddressesModule,
            imports_module_1.ImportsModule,
            auth_module_1.AuthModule,
            refunds_module_1.RefundsModule,
            authors_module_1.AuthorsModule,
            manufacturers_module_1.ManufacturersModule,
            newsletters_module_1.NewslettersModule,
            reviews_module_1.ReviewModule,
            questions_module_1.QuestionModule,
            wishlists_module_1.WishlistsModule,
            reports_module_1.ReportsModule,
            feedbacks_module_1.FeedbackModule,
            payment_method_module_1.PaymentMethodModule,
            payment_intent_module_1.PaymentIntentModule,
            web_hook_module_1.WebHookModule,
            payment_module_1.PaymentModule,
            store_notices_module_1.StoreNoticesModule,
            conversations_module_1.ConversationsModule,
            messages_module_1.MessagesModule,
            ai_module_1.AiModule,
            faqs_module_1.FaqsModule,
            notify_logs_module_1.NotifyLogsModule,
            terms_and_conditions_module_1.TermsAndConditionsModule,
            flash_sale_module_1.FlashSaleModule,
            refund_policies_module_1.RefundPoliciesModule,
            refund_reasons_module_1.RefundReasonModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map