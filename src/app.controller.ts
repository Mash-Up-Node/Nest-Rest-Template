import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestException } from './common/exception/app.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test-error')
  throwTestError() {
    throw new TestException();
  }
}
