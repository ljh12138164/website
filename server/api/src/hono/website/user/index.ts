import { Hono } from 'hono';
import { to } from 'await-to-js';
import db from '../../../db';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age'),
});
const user = new Hono().get('/user', async (c) => {
  const [error, allUsers] = await to(db.select().from(users));
  console.log({ error, allUsers });
  return c.json({
    message: 'Hello World',
  });
});

export default user;
