import type { Role } from './src';

declare module 'jose' {
  interface JWTPayload {
    userId: string;
    role: Role;
    avatar: string;
    name: string;
    email: string;
  }
}
