import { to } from 'await-to-js';
import type { Context } from 'hono';
import { interceptor } from './interceptor';

/**
 * ### 将Promise转换为[error, result],并抛出错误
 */
export const toPromise = async <T>(
  promise: Promise<T>,
  { autoThrow = true, autoThrowMessage = '服务器错误' } = {},
) => {
  const [error, result] = await to(promise);
  if (error && autoThrow) {
    throw new Error(autoThrowMessage);
  }
  return result;
};

export const toInterceptor = async <T>(promise: Promise<T>, c: Context, autoThrow = true) => {
  const [error, result] = await to(promise);
  console.log(error, result);
  if (error && autoThrow) {
    throw interceptor(error, c);
  }
  if (!result) return result;

  return result;
};
