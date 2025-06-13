import { Hono } from 'hono';
import { webRouter } from './router/web';
import { createUIMiddleware } from './middleware/ui';

const app = new Hono().basePath('/api').route('/web', webRouter);

// 添加UI路由
app.route('/ui', createUIMiddleware(app));

export default {
  port: 3000,
  fetch: app.fetch,
}
export type AppType = typeof app;