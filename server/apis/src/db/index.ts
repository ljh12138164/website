import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!);
const db = drizzle({ client: sql });
export default db;
