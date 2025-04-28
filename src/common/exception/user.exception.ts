import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { UserMessage } from './error-message.enum';

export class UserNotFoundException extends BaseException {
  constructor() {
    super(HttpStatus.NOT_FOUND, UserMessage.USER_NOT_FOUND);
  }
}
