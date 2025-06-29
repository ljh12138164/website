import { Hono } from 'hono';
import { authMiddleware } from '../../middleware/auth';

export const profileRouter = new Hono().use(authMiddleware).get('/me', async (c) => {
  const userInfo = c.get('userInfo');
  return c.json(userInfo);
});
