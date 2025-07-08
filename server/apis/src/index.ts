import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { handle } from 'hono/vercel';
import { sandbox } from './router/site/sandbox';
import { webRouter } from './router/web';

export const runtime = 'edge';

const app = new Hono()
  .use(logger())
  .basePath('/api')
  .use(
    cors({
      origin: '*',
      credentials: true,
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization'],
    }),
  )
  .route('/web', webRouter)
  .route('/site', sandbox);
// 导出端口和fetch函数
const exportApp = process.env.NODE_ENV === 'bun' ? handle(app) : app;
export default exportApp;

// 导出trpc类型
export type AppType = typeof app;
// 导出schema
export * from './schema';
export * from './types';
