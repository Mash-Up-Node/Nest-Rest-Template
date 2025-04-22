import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function swaggerConfig(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('REST Template')
    .setDescription('Mash-Up Node팀 RESTful API 템플릿입니다.')
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      operationsSorter: 'method',
    },
  });
}
