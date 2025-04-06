import { BaseException } from './base.exception'

export class UserNotFoundException extends BaseException {
  constructor() {
    super(404, 'USER_NOT_FOUND', '해당 사용자를 찾을 수 없습니다.')
  }
}