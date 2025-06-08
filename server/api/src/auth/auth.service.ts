import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { RegisterDto, LoginDto, RefreshTokenDto } from './dto/auth.dto';
import { TokenPayload, Tokens } from './interfaces/token.interface';
import { jwtConfig } from './config/jwt.config';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { PG_CONNECTION } from '../drizzle/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
  ) {}

  /**
   * 用户注册
   * @param registerDto 注册信息
   * @returns 用户信息和token
   */
  async register(
    registerDto: RegisterDto
  ): Promise<{ user: any; tokens: Tokens }> {
    // 检查邮箱是否已存在
    const existingUser = await this.userService.findUserByEmail(
      registerDto.email
    );
    if (existingUser) {
      throw new ConflictException('该邮箱已被注册');
    }

    // 密码加密
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // 创建新用户
    const newUser = await this.db
      .insert(schema.users)
      .values({
        fullName: registerDto.fullName,
        email: registerDto.email,
        password: hashedPassword,
      })
      .returning({
        id: schema.users.id,
        fullName: schema.users.fullName,
        email: schema.users.email,
        createdAt: schema.users.createdAt,
      });

    const user = newUser[0];

    // 生成token
    const tokens = await this.generateTokens(user.id, user.email as string);

    return { user, tokens };
  }

  /**
   * 用户登录
   * @param loginDto 登录信息
   * @returns 用户信息和token
   */
  async login(loginDto: LoginDto): Promise<{ user: any; tokens: Tokens }> {
    const user = await this.userService.findUserByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('邮箱或密码错误');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password as string
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('邮箱或密码错误');
    }

    // 生成token
    const tokens = await this.generateTokens(user.id, user.email as string);

    // 返回用户信息（不含密码）
    const { password, ...result } = user;
    return { user: result, tokens };
  }

  /**
   * 刷新token
   * @param refreshTokenDto 刷新token
   * @returns 新的token对
   */
  async refreshTokens(refreshTokenDto: RefreshTokenDto): Promise<Tokens> {
    try {
      // 验证刷新token
      const payload = this.jwtService.verify(refreshTokenDto.refreshToken, {
        secret: jwtConfig.refreshTokenSecret,
      }) as TokenPayload;

      // 检查用户是否存在
      const user = await this.userService.findUserById(payload.sub);
      if (!user) {
        throw new UnauthorizedException('无效的刷新令牌');
      }

      // 生成新的token
      return this.generateTokens(user.id, user.email as string);
    } catch (error) {
      throw new UnauthorizedException('无效的刷新令牌');
    }
  }

  /**
   * 生成访问令牌和刷新令牌
   * @param userId 用户ID
   * @param email 用户邮箱
   * @returns 令牌对
   */
  private async generateTokens(userId: number, email: string): Promise<Tokens> {
    const payload: TokenPayload = { sub: userId, email };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: jwtConfig.accessTokenSecret,
        expiresIn: jwtConfig.accessTokenExpiresIn,
      }),
      this.jwtService.signAsync(payload, {
        secret: jwtConfig.refreshTokenSecret,
        expiresIn: jwtConfig.refreshTokenExpiresIn,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
