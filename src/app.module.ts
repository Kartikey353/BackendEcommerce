import { MessagesModule } from './messages/messages.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StripeModule } from 'nestjs-stripe';
import { AddressesModule } from './addresses/addresses.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AttributesModule } from './attributes/attributes.module';
import { AuthModule } from './auth/auth.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { CouponsModule } from './coupons/coupons.module';
import { FeedbackModule } from './feedbacks/feedbacks.module';
import { ImportsModule } from './imports/imports.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { NewslettersModule } from './newsletters/newsletters.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentIntentModule } from './payment-intent/payment-intent.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { PaymentModule } from './payment/payment.module';
import { ProductsModule } from './products/products.module';
import { QuestionModule } from './questions/questions.module';
import { RefundsModule } from './refunds/refunds.module';
import { ReportsModule } from './reports/reports.module';
import { ReviewModule } from './reviews/reviews.module';
import { SettingsModule } from './settings/settings.module';
import { ShippingsModule } from './shippings/shippings.module';
import { ShopsModule } from './shops/shops.module';
import { TagsModule } from './tags/tags.module';
import { TaxesModule } from './taxes/taxes.module';
import { TypesModule } from './types/types.module';
import { UploadsModule } from './uploads/uploads.module';
import { UsersModule } from './users/users.module';
import { WebHookModule } from './web-hook/web-hook.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { WithdrawsModule } from './withdraws/withdraws.module';
import { StoreNoticesModule } from './store-notices/store-notices.module';
import { ConversationsModule } from './conversations/conversations.module';
import { AiModule } from './ai/ai.module';
import { FaqsModule } from './faqs/faqs.module';
import { TermsAndConditionsModule } from './terms-and-conditions/terms-and-conditions.module';
import { FlashSaleModule } from './flash-sale/flash-sale.module';
import { RefundPoliciesModule } from './refund-policies/refund-policies.module';
import { RefundReasonModule } from './refund-reasons/refund-reasons.module';
import { NotifyLogsModule } from './notify-logs/notify-logs.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:[".local.env"]
    }), 
    MongooseModule.forRootAsync({ 
      imports:[ConfigModule], 
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({uri:configService.get("MONGO_URI")})
    }),
    StripeModule.forRoot({
      apiKey: process.env.STRIPE_API_KEY,
      apiVersion: '2022-11-15',
    }),
    UsersModule,
    CommonModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    AnalyticsModule,
    AttributesModule,
    ShippingsModule,
    TaxesModule,
    TagsModule,
    ShopsModule,
    TypesModule,
    WithdrawsModule,
    UploadsModule,
    SettingsModule,
    CouponsModule,
    AddressesModule,
    ImportsModule,
    AuthModule,
    RefundsModule,
    AuthorsModule,
    ManufacturersModule,
    NewslettersModule,
    ReviewModule,
    QuestionModule,
    WishlistsModule,
    ReportsModule,
    FeedbackModule,
    PaymentMethodModule,
    PaymentIntentModule,
    WebHookModule,
    PaymentModule,
    StoreNoticesModule,
    ConversationsModule,
    MessagesModule,
    AiModule,
    FaqsModule,
    NotifyLogsModule,
    TermsAndConditionsModule,
    FlashSaleModule,
    RefundPoliciesModule,
    RefundReasonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
