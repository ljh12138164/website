import {
  Body,
  Inject,
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { PG_CONNECTION } from '../drizzle/constants';
import { LoginDto, UserCreateDto } from './dto/user.dto';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
  ) {}
  async getUsers() {
    return this.db.query.users.findMany();
  }

  /**
   * ### 创建用户
   * - 创建用户
   * - 返回用户
   * @param user
   * @returns
   */
  async createUser(@Body() user: UserCreateDto) {
    // 检查邮箱是否已存在
    const existingUser = await this.findUserByEmail(user.email);
    if (existingUser) {
      throw new ConflictException('该邮箱已被注册');
    }

    // 密码加密
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // 创建新用户
    return this.db
      .insert(schema.users)
      .values({
        ...user,
        password: hashedPassword,
      })
      .returning({
        id: schema.users.id,
        fullName: schema.users.fullName,
        email: schema.users.email,
        createdAt: schema.users.createdAt,
      });
  }

  /**
   * ### 用户登录
   * - 验证用户凭据
   * - 返回用户信息（不含密码）
   * @param loginDto
   * @returns
   */
  async login(@Body() loginDto: LoginDto) {
    const user = await this.findUserByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('邮箱或密码错误');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password || ''
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('邮箱或密码错误');
    }

    // 返回用户信息（不含密码）
    const { password, ...result } = user;
    return result;
  }

  /**
   * ### 通过邮箱查找用户
   * @param email
   * @returns
   */
  async findUserByEmail(email: string) {
    return this.db.query.users.findFirst({
      where: eq(schema.users.email, email),
    });
  }

  /**
   * ### 通过ID查找用户
   * @param id
   * @returns
   */
  async findUserById(id: number) {
    return this.db.query.users.findFirst({
      where: eq(schema.users.id, id),
    });
  }
}
