import { pgEnum, pgTable, primaryKey, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { Role } from '../types';
import { relations } from 'drizzle-orm';

export const roleEnum = pgEnum('role', [Role.User, Role.Admin]);

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }),
  role: roleEnum('role').notNull().default(Role.User),
  salt: varchar({ length: 255 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  avatar: varchar({ length: 255 }).notNull().default('https://api.multiavatar.com/Belle'),
});

export const providerEnum = pgEnum('provider', ['github', 'weixin']);

export const userOauthTable = pgTable(
  'user_oauth',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' }),
    provider: providerEnum('provider').notNull(),
    providerId: varchar({ length: 255 }).notNull(),
    accessToken: varchar({ length: 255 }).notNull(),
    refreshToken: varchar({ length: 255 }).notNull(),
    expiresAt: timestamp('expires_at').notNull(),
  },
  (t) => ({
    // 联合主键
    pk: primaryKey({ columns: [t.provider, t.providerId] }),
  }),
);
//  创建一对多关系
export const relationT = relations(usersTable, ({ many }) => ({
  oAuthAccounts: many(userOauthTable),
}));
// 创建外键关系
export const userRelatives = relations(userOauthTable, ({ one }) => {
  return {
    user: one(usersTable, {
      fields: [userOauthTable.userId],
      references: [usersTable.id],
    }),
  };
});
