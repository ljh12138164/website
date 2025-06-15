import { Hono } from 'hono';
import { userRouter } from './user';
import 'dotenv';

export const webRouter = new Hono().route('/user', userRouter);
