import { serve } from '@hono/node-server';
import { Scalar } from '@scalar/hono-api-reference';
import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { createUIMiddleware } from './middleware/ui';
import { webRouter } from './router/web';

const app = new Hono().use(cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  exposeHeaders: ['Content-Type', 'Authorization'],
  maxAge: 600,
})).use(logger()).use(compress()).basePath('/api')
.get('/scalar', Scalar({ url: '/doc' }))
.route('/web', webRouter)


app.route('/ui', createUIMiddleware(app))

// 导出端口和fetch函数
export default serve({ fetch: app.fetch, port: 3000 })


// 导出trpc类型
export type AppType = typeof app;