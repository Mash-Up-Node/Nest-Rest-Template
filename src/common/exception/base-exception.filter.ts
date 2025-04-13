import {
  ArgumentsHost,
  Catch,
  ExceptionFilter
} from '@nestjs/common'
import { Request, Response } from 'express'
import { BaseException } from './base.exception'

@Catch(BaseException)
export class BaseExceptionFilter implements ExceptionFilter {
  catch(exception: BaseException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    const exceptionResponse = exception.getResponse()

    const body = this.createResponseBody(exceptionResponse, status, request)
    response.status(status).json(body)
  }

  private createResponseBody(
    exceptionResponse: unknown,
    status: number,
    request: Request,
  ): Record<string, any> {
    if (this.isObject(exceptionResponse)) {
      return {
        ...exceptionResponse,
        path: request.url,
      }
    }

    return {
      statusCode: status,
      message: exceptionResponse,
      path: request.url,
    }
  }

  private isObject(value: unknown): value is Record<string, any> {
    return typeof value === 'object' && value !== null
  }
}