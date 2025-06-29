import type { Context } from 'hono';
import * as jose from 'jose';

export const authMiddleware = async (c: Context, next: () => Promise<void>) => {
  const token = c.req.header('Authorization')?.split(' ')[1];
  if (!token) return c.json({ message: '请先登录' }, 401);

  const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
  const userInfo = payload;
  c.set('userInfo', userInfo);
  await next();
};
