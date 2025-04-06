import { BaseException } from './base.exception';

export class TestException extends BaseException {
  constructor() {
    super(418, 'TEST_EXCEPTION', '테스트용 예외입니다. 노드팀 화이팅!');
  }
}