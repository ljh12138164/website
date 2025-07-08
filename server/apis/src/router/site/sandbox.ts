import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { getAllSandBoxData, getSandBoxData } from '../../service/site/sandbox';
import { toInterceptor } from '../../utils/promise';
export const sandbox = new Hono()
  .get(
    '/data',
    zValidator(
      'param',
      z.object({
        path: z.string(),
      }),
    ),
    async (c) => {
      const { path } = c.req.valid('param');
      const data = await toInterceptor(getSandBoxData(path), c);
      return c.json(data);
    },
  )
  .get('/all', async (c) => {
    const data = await toInterceptor(getAllSandBoxData(), c);
    return c.json(data);
  });
