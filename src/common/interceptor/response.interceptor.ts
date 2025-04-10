import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
} from '@nestjs/common';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class CommonResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const statusCode: HttpStatus = context
          .switchToHttp()
          .getResponse().statusCode;
        return {
          success: true,
          statusCode: statusCode,
          data: data,
        };
      }),
      catchError((err) => {
        return of({
          success: false,
          statusCode: err.statusCode,
          errorCode: err.errorCode,
          errorMessage: err.message,
        });
      }),
    );
  }
}
