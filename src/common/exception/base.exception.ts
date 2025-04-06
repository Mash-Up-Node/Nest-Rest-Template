import { HttpException } from '@nestjs/common'

export class BaseException extends HttpException {
  constructor(status: number, errorCode: string, message: string) {
    super(
      {
        statusCode: status,
        errorCode,
        message,
        timestamp: new Date().toISOString(),
      },
      status,
    )
  }
}