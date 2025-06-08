import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

// 注册DTO
const RegisterSchema = z.object({
  fullName: z.string().min(2, '姓名至少需要2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符'),
});

export class RegisterDto extends createZodDto(RegisterSchema) {}

// 登录DTO
const LoginSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(1, '密码不能为空'),
});

export class LoginDto extends createZodDto(LoginSchema) {}

// 刷新Token DTO
const RefreshTokenSchema = z.object({
  refreshToken: z.string(),
});

export class RefreshTokenDto extends createZodDto(RefreshTokenSchema) {}
