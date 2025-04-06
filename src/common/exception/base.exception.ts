import { HttpException, HttpStatus } from '@nestjs/common'

export class BaseException extends HttpException {
  constructor(status: number, message: string) {
    super(
      {
        statusCode: status,
        errorCode: HttpStatus[status],
        message: message,
        timestamp: new Date().toISOString(),
      },
      status,
    )
  }
}