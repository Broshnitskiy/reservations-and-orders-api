import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ErrorInterceptor } from './error.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new ErrorInterceptor());

  await app.listen(3000);
  console.info(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
