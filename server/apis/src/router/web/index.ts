import { Hono } from 'hono';
import { userRouter } from './user';

export const webRouter = new Hono().route('/user', userRouter)