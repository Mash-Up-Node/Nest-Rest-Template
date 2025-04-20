import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { CommonResponseInterceptor } from '@/common/interceptor';
import { Reflector } from '@nestjs/core';

export function nestConfig(app: INestApplication) {
  const reflector = app.get<Reflector>(Reflector);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalInterceptors(
    new CommonResponseInterceptor(),
    new ClassSerializerInterceptor(reflector),
  );
}
