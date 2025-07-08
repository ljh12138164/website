import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const markdownList = sqliteTable('markdown_list', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  content: text().notNull(),
  createdAt: int().notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: int().notNull().default(sql`CURRENT_TIMESTAMP`),
});
