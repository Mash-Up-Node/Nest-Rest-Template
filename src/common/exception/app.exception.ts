import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';

export class TestException extends BaseException {
  constructor() {
    super(HttpStatus.I_AM_A_TEAPOT, '테스트용 예외입니다. 노드팀 화이팅!');
  }
}