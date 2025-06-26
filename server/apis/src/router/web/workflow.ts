import { zValidator } from '@hono/zod-validator';
import { to } from 'await-to-js';
import { Hono } from 'hono';
import { z } from 'zod';
import db from '../../db';
import { workflowsTable } from '../../db/schema';

export const workflowRouter = new Hono()
  /**
   * ### 创建工作流
   */
  .post(
    '/create',
    zValidator(
      'json',
      z.object({
        name: z.string(),
        description: z.string(),
      }),
    ),
    async (c) => {
      const { name, description } = c.req.valid('json');
      const [err, workflow] = await to(
        db.insert(workflowsTable).values({ name, description }).returning(),
      );
      if (err) {
        return c.json(
          {
            code: 500,
            message: '创建工作流失败',
          },
          500,
        );
      }
      return c.json(workflow);
    },
  )
  /**
   * ### 获取工作流
   */
  .get('/list', async (c) => {
    const [err, workflows] = await to(db.select().from(workflowsTable));
    if (err) {
      console.log(err);
      return c.json(
        {
          code: 500,
          message: '获取工作流失败',
        },
        500,
      );
    }
    return c.json(workflows);
  });
