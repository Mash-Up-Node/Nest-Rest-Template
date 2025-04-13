import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseExceptionFilter } from './common/exception/base-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new BaseExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
