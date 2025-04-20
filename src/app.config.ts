import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CommonResponseInterceptor } from '@/common/interceptor';

export function nestConfig(app: INestApplication) {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(new CommonResponseInterceptor());
}
