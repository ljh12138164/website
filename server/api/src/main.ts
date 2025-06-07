import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用ZodValidationPipe来验证请求体
  app.useGlobalPipes(new ZodValidationPipe());

  // 配置Swagger
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API Description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // 启动服务
  const port = process.env.PORT ?? 3000;
  const url = `http://localhost:${port}/api`;

  console.log(`🎉🎉🎉 API Document is running on ${url}`);

  await app.listen(port);
  // 热更新
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
