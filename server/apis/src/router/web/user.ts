import { Hono } from 'hono';

export const userRouter = new Hono().get('/abc', async (c) => {
  return c.text('Hello Hono!')
})