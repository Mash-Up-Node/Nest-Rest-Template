import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { swaggerConfig } from '@/app.swagger';
import { nestConfig } from '@/app.config';
import { GlobalAuthGuard } from '@/common/guard/global-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  nestConfig(app);
  swaggerConfig(app);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new GlobalAuthGuard(reflector));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
