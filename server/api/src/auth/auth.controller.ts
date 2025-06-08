import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, RefreshTokenDto } from './dto/auth.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('认证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 用户注册
   * @param registerDto 注册信息
   * @returns 用户信息和token
   */
  @ApiOperation({ summary: '用户注册' })
  @ApiResponse({
    status: 201,
    description: '注册成功',
  })
  @ApiResponse({ status: 409, description: '邮箱已被注册' })
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  /**
   * 用户登录
   * @param loginDto 登录信息
   * @returns 用户信息和token
   */
  @ApiOperation({ summary: '用户登录' })
  @ApiResponse({
    status: 200,
    description: '登录成功',
  })
  @ApiResponse({ status: 401, description: '邮箱或密码错误' })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  /**
   * 刷新token
   * @param refreshTokenDto 刷新token
   * @returns 新的token对
   */
  @ApiOperation({ summary: '刷新令牌' })
  @ApiResponse({
    status: 200,
    description: '刷新成功',
  })
  @ApiResponse({ status: 401, description: '无效的刷新令牌' })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
  }
}
