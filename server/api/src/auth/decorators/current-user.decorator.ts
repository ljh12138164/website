import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { TokenPayload } from '../interfaces/token.interface';

/**
 * 获取当前认证的用户
 * 使用方式: @CurrentUser() user: TokenPayload
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as TokenPayload;
  }
);
