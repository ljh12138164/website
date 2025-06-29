import { pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';
import { uuid } from 'drizzle-orm/pg-core';
import { Role } from '../types';

export const roleEnum = pgEnum('role', [Role.User, Role.Admin]);

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
  role: roleEnum('role').notNull().default(Role.User),
  salt: varchar({ length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  avatar: varchar({ length: 255 }).notNull().default('https://api.multiavatar.com/Belle'),
});
