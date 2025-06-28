import 'dotenv/config';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { handle } from 'hono/vercel';
import { webRouter } from './router/web';

export const runtime = 'edge';

const app = new Hono()
  .use(
    cors({
      origin: '*',
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      exposeHeaders: ['Content-Type', 'Authorization'],
      maxAge: 600,
    }),
  )
  .use(logger())
  .basePath('/api')
  .route('/web', webRouter);
// 导出端口和fetch函数
export default handle(app);
console.log(`🚀🚀🚀服务器启动成功，端口：http://localhost:${process.env.PORT}`);
console.log('🚀🚀🚀数据库连接成功,数据库地址：https://local.drizzle.studio');

// 导出trpc类型
export type AppType = typeof app;
