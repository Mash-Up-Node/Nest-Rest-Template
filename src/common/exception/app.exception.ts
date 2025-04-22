import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { AppMessage } from './error-message.enum';

export class TestException extends BaseException {
  constructor() {
    super(HttpStatus.I_AM_A_TEAPOT, AppMessage.TEST_EXCEPTION);
  }
}