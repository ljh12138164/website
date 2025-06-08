import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

// 用户表结构
const UserSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

// 创建用户DTO
export class UserCreateDto extends createZodDto(UserSchema) {}

// 登录DTO
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export class LoginDto extends createZodDto(LoginSchema) {}
