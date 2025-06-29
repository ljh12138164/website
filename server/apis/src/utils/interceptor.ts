import type { Context } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';

const errorMessage = {
  用户不存在: 404,
  用户已存在: 400,
  密码错误: 400,
  服务器错误: 500,
};

export const interceptor = async (error: Error, c: Context) => {
  if (error instanceof Error) {
    const code = errorMessage[error.message as keyof typeof errorMessage];
    if (!code) {
      return c.json({ error: '服务器错误' }, 500);
    }

    return c.json({ error: error.message }, code as ContentfulStatusCode);
  }
  return c.json({ error: '服务器错误' }, 500);
};
