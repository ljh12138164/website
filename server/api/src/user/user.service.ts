import { Body, Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { PG_CONNECTION } from '../drizzle/constants';
import { UserCreateDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
  ) {}
  async getUsers() {
    return this.db.query.users.findMany();
  }

  /**
   * ### 创建用户
   * - 创建用户
   * - 返回用户
   * @param user
   * @returns
   */
  async createUser(@Body() user: UserCreateDto) {
    return this.db.insert(schema.users).values(user).returning();
  }
}
