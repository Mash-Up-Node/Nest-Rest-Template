import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from "@/app.swagger";
import { nestConfig } from "@/app.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  nestConfig(app);
  swaggerConfig(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
