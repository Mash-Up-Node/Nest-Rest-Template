import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { AuthMessage } from './error-message.enum';

export class ForbiddenException extends BaseException {
  constructor() {
    super(HttpStatus.FORBIDDEN, AuthMessage.FORBIDDEN);
  }
}

export class UnauthorizedException extends BaseException {
  constructor() {
    super(HttpStatus.UNAUTHORIZED, AuthMessage.UNAUTHORIZED);
  }
}
