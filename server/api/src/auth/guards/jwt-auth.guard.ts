import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConfig } from '../config/jwt.config';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('未提供访问令牌');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConfig.accessTokenSecret,
      });
      // 将用户信息附加到请求对象上
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('访问令牌无效或已过期');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
