export const jwtConfig = {
  accessTokenSecret: process.env.JWT_ACCESS_SECRET || 'your-access-secret-key',
  accessTokenExpiresIn: '15m',
  refreshTokenSecret:
    process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key',
  refreshTokenExpiresIn: '7d',
};
