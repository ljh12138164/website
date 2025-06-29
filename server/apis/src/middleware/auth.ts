import to from 'await-to-js';
import type { Context } from 'hono';
import { jwtVerify } from 'jose';
export const authMiddleware = async (c: Context, next: () => Promise<void>) => {
  const token = c.req.header('Authorization')?.split(' ')[1];
  if (!token) return c.json({ message: '请先登录' }, 401);

  const [error, data] = await to(
    jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET)),
  );
  if (error) return c.json({ message: '请先登录' }, 401);
  if (!data.payload) return c.json({ message: '请先登录' }, 401);
  const userInfo = data.payload;
  c.set('userInfo', userInfo);
  await next();
};
