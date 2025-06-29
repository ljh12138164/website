import bcrypt from 'bcryptjs';
import * as jose from 'jose';
import type { UserInfo } from '../types';
/**
 * ### 加密密码
 * 使用bcryptjs库进行加密
 */
export const hashPassword = async (
  password: string,
): Promise<{ salt: string; hashedPassword: string }> => {
  // 生成盐
  const salt = await bcrypt.genSalt(10);
  // 加密密码
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
};

/**
 * ### 比较密码
 * 使用bcryptjs库进行比较
 */
export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

/**
 * ### 创建token
 */
export const createToken = async ({ userId, role, avatar, name, email }: UserInfo) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  // 创建token
  const token = await new jose.SignJWT({ userId, role, avatar, name, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret);
  // 返回token
  return token;
};
