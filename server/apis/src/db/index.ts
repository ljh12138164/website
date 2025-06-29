import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
const client = postgres(process.env.POSTGRES_URL!, { prepare: false });
const db = drizzle(client, { logger: true });
export default db;
