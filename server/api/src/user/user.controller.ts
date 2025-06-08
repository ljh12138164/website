import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto, UserCreateDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { TokenPayload } from '../auth/interfaces/token.interface';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '获取所有用户' })
  @ApiResponse({
    status: 200,
    description: '成功获取所有用户',
  })
  @Get()
  users() {
    return this.userService.getUsers();
  }

  /**
   * ### 用户注册
   * @param user
   * @returns
   */
  @ApiOperation({ summary: '用户注册' })
  @ApiResponse({
    status: 201,
    description: '注册成功',
  })
  @ApiResponse({ status: 400, description: '用户名、邮箱、密码不能为空' })
  @ApiResponse({ status: 409, description: '邮箱已被注册' })
  @Post('register')
  register(@Body() user: UserCreateDto) {
    return this.userService.createUser(user);
  }

  /**
   * ### 用户登录
   * @param loginDto
   * @returns
   */
  @ApiOperation({ summary: '用户登录' })
  @ApiResponse({
    status: 200,
    description: '登录成功',
  })
  @ApiResponse({ status: 400, description: '邮箱、密码不能为空' })
  @ApiResponse({ status: 401, description: '邮箱或密码错误' })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  /**
   * ### 获取当前用户信息
   * 需要JWT认证
   * @param user 从JWT中提取的用户信息
   * @returns 用户详细信息
   */
  @ApiOperation({ summary: '获取当前用户信息' })
  @ApiResponse({
    status: 200,
    description: '成功获取用户信息',
  })
  @ApiResponse({ status: 401, description: '未认证或令牌无效' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@CurrentUser() user: TokenPayload) {
    const userInfo = await this.userService.findUserById(user.sub);
    if (!userInfo) {
      throw new BadRequestException('用户不存在');
    }
    const { password, ...result } = userInfo;
    return result;
  }
}
