import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

/*
 * ### 用户表
 * - id: serial
 * - fullName: text
 * - phone: varchar(256)
 * - createdAt: timestamp
 * - updatedAt: timestamp
 */
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  avatar: text('avatar'),
  email: text('email'),
  password: text('password'),
});
