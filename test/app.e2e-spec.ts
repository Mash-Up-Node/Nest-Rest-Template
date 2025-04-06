import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/test-error (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/test-error')

    expect(response.status).toBe(418)
    expect(response.body).toEqual(
      expect.objectContaining({
        statusCode: 418,
        errorCode: 'TEST_EXCEPTION',
        message: '테스트용 예외입니다. 노드팀 화이팅!',
        timestamp: expect.any(String),
      }),
    )
  });

  afterEach(async () => {
    await app.close();
  });
});
