"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const isLocal = process.env.NODE_ENV === 'local';
    if (isLocal) {
        const config = new swagger_1.DocumentBuilder()
            .setTitle('Marvel')
            .setDescription('Marvel Mock API')
            .setVersion('1.0')
            .addTag('marvel')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('docs', app, document);
    }
    const PORT = process.env.PORT || 5000;
    await app.listen(PORT);
    console.log(`Application is running on: ${await app.getUrl()}/api`);
}
bootstrap();
//# sourceMappingURL=main.js.map