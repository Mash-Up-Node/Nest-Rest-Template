import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BaseExceptionFilter } from './common/exception/base-exception.filter';
import { swaggerConfig } from "@/app.swagger";
import { nestConfig } from "@/app.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new BaseExceptionFilter());
  nestConfig(app);
  swaggerConfig(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
