import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { signInSchema, signUpSchema } from '../../schema/web/user';
import { signIn, signUp } from '../../service/web/user';
import { toInterceptor } from '../../utils/promise';

export const userRouter = new Hono()
  .get('/test', async (c) => {
    return c.json({ message: 'Hello, World!' });
  })
  /**
   * ### 用户登录
   */
  .post('/signIn', zValidator('json', signInSchema), async (c) => {
    const { email, password } = c.req.valid('json');
    const user = await toInterceptor(signIn({ email, password }), c);
    if (!user) return c.json({ message: '用户登录失败' }, 500);
    return c.json(user);
  })
  /**
   * ### 用户注册
   */
  .post('/signUp', zValidator('json', signUpSchema), async (c) => {
    const { email, password, name } = c.req.valid('json');
    const user = await toInterceptor(signUp({ email, password, name }), c);
    if (!user) return c.json({ message: '用户注册失败' }, 500);
    return c.json(user);
  });
