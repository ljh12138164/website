import type { ClientResponse } from 'hono/client';
import type { ContentfulStatusCode } from 'hono/utils/http-status';
/** ### 处理请求 */
export const handleRequest = async <T extends object>(
  response: ClientResponse<T | { message: string }, ContentfulStatusCode, 'json'>,
): Promise<T> => {
  if (!response.ok) {
    const errorData = (await response.json()) as { message: string };
    throw new Error(errorData.message || 'Request failed');
  }
  return (await response.json()) as T;
};
