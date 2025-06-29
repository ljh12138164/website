import { z } from 'zod';

/** ### 登录 */
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/** ### 注册 */
export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

/** ### 创建token */
export const createTokenSchema = z.object({
  userId: z.number(),
});
