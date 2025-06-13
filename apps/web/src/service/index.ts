import { AppType } from 'apis';
import { hc } from 'hono/client';

const client = hc<AppType>(process.env.PUBLIC_NEXT_BASE_URL!);

export default client.api.web;
