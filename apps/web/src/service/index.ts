import type { AppType } from "apis";
import { hc } from "hono/client";

const client = hc<AppType>(
	process.env.PUBLIC_NEXT_BASE_URL || "http://localhost:3000",
).api.web;

export default client;
