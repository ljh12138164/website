import bcrypt from 'bcryptjs';
import * as jose from 'jose';
import type { UserInfo } from '../types';

/**
 * 密码加密选项
 */
const BCRYPT_SALT_ROUNDS = 10;

/**
 * 加密密码
 */
export const hashPassword = async (
  password: string,
): Promise<{ salt: string; hashedPassword: string }> => {
  const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return { salt, hashedPassword };
};

/**
 * 比较密码
 */
export const verifyPassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

/**
 * 比较密码
 */
export const comparePasswordWithSalt = async (
  plainPassword: string,
  salt: string,
  storedHash: string,
): Promise<boolean> => {
  const hashedPassword = await bcrypt.hash(plainPassword, salt);
  return hashedPassword === storedHash;
};

/**
 * 创建JWT token
 */
export const createToken = async (userInfo: UserInfo): Promise<string> => {
  const { userId, role, avatar, name, email } = userInfo;

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set');
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  return await new jose.SignJWT({
    sub: userId,
    userId,
    role,
    avatar,
    name,
    email,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
};

/**
 * 验证和解码JWT token
 */
export const verifyToken = async (token: string): Promise<jose.JWTVerifyResult | null> => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set');
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    return await jose.jwtVerify(token, secret);
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};
