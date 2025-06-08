import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用ZodValidationPipe来验证请求体
  app.useGlobalPipes(new ZodValidationPipe());

  // 使用全局拦截器统一响应格式
  app.useGlobalInterceptors(new TransformInterceptor());

  // 使用全局异常过滤器处理异常
  app.useGlobalFilters(new HttpExceptionFilter());

  // 允许跨域
  app.enableCors();

  // 配置Swagger
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API Description')
    .setVersion('1.0')
    .addTag('API')
    .addBearerAuth() // 添加Bearer认证
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
