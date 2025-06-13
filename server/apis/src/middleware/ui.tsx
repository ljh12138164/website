import { Hono } from 'hono';

interface Route {
  method: string;
  path: string;
}

const APIList = ({ routes }: { routes: Route[] }) => {
  return (
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>API接口列表</title>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          h1 {
            color: #333;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 0.5rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          thead {
            background-color: #f8f9fa;
          }
          tr:hover {
            background-color: #f5f5f5;
          }
          .method {
            font-weight: bold;
            border-radius: 4px;
            padding: 4px 8px;
            display: inline-block;
            min-width: 60px;
            text-align: center;
          }
          .get { background: #e3f2fd; color: #0d47a1; }
          .post { background: #e8f5e9; color: #1b5e20; }
          .put { background: #fff8e1; color: #ff6f00; }
          .delete { background: #ffebee; color: #b71c1c; }
          .patch { background: #f3e5f5; color: #4a148c; }
        `}</style>
      </head>
      <body>
        <h1>API接口列表</h1>
        <table>
          <thead>
            <tr>
              <th>方法</th>
              <th>路径</th>
            </tr>
          </thead>
          <tbody>
            {routes.map(route => (
              <tr>
                <td>
                  <span class={`method ${route.method.toLowerCase()}`}>{route.method}</span>
                </td>
                <td>{route.path}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </html>
  );
};

export const createUIMiddleware = (app: Hono) => {
  const ui = new Hono();

  ui.get('/', async (c) => {
    const routes: Route[] = [];

    // 递归获取所有路由
    const extractRoutes = (router: any, basePath: string = '') => {
      if (router && router.routes) {
        for (const route of router.routes) {
          const method = route.method;
          const path = `${basePath}${route.path}`;

          routes.push({ method, path });

          // 如果有子路由，递归处理
          if (route.children) {
            extractRoutes(route, path);
          }
        }
      }
    };

    // 获取应用中的所有路由
    extractRoutes(app);

    // 返回使用JSX渲染的HTML页面
    return c.html(<APIList routes={routes} />);
  });

  return ui;
};