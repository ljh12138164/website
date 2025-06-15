import { Hono } from 'hono';
import db from '../../db';
import { usersTable } from '../../db/schema';
export const userRouter = new Hono().get('/abc', async (c) => {
  const result = await db.select().from(usersTable);
  return c.json(result);
});
