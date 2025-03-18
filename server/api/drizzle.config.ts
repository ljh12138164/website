import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: 'pg', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema.ts'
})