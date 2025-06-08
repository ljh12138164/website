export interface TokenPayload {
  sub: number;
  email: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}
