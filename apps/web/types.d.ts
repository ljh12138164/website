import type { Role, UserInfo } from "apis";

declare module "jose" {
	interface JWTPayload {
		userId: string;
		role: Role;
		avatar: string;
		name: string;
		email: string;
	}
}

declare module "hono" {
	interface ContextVariableMap {
		userInfo: UserInfo;
	}
}
