import type { Role, UserInfo } from './src';

declare module 'jose' {
  interface JWTPayload {
    userId: string;
    role: Role;
    avatar: string;
    name: string;
    email: string;
  }
}

declare module 'hono' {
  interface ContextVariableMap {
    userInfo: UserInfo;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test' | 'bun';
  }
}
