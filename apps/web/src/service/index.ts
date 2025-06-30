import type { AppType } from "apis";
import { hc } from "hono/client";
import { redirect } from "next/navigation";

const client = hc<AppType>(
	process.env.PUBLIC_NEXT_BASE_URL || "http://localhost:3000",
).api.web;

export const oAuthSignIn = async (_provider: ["github", "weixin"]) => {
	const url = "";
	redirect(url);
};
export default client;
