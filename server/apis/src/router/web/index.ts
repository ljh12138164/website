import { Hono } from 'hono';
import { profileRouter } from './profile';
import { userRouter } from './user';
import { workflowRouter } from './workflow';

export const webRouter = new Hono()
  .route('/user', userRouter)
  .route('/workflow', workflowRouter)
  .route('/profile', profileRouter);
