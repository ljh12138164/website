import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * 全局异常过滤器
 * 捕获HttpException异常
 * 并返回统一格式的响应
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const exceptionResponse = exception.getResponse() as
      | string
      | { message: string | string[] };

    const message =
      typeof exceptionResponse === 'string'
        ? exceptionResponse
        : Array.isArray(exceptionResponse.message)
          ? exceptionResponse.message[0]
          : exceptionResponse.message || exception.message;

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      data: null,
    });
  }
}
