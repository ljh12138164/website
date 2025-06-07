import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from '../db/schema';
import { PG_CONNECTION } from './constants';

export const drizzleProvider = {
  provide: PG_CONNECTION,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const connectionString = configService.get<string>('DATABASE_URL');
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const pool = new Pool({
      connectionString,
    });
    return drizzle(pool, { schema });
  },
};
