import type { AppType } from 'apis';
import { hc } from 'hono/client';

const client = hc<AppType>(process.env.PUBLIC_NEXT_BASE_URL || 'http://localhost:3000').api.site;

export default client;
export const getAllSandBoxData = async () => {
  const res = await client.all.$get();
  return res.json();
};
