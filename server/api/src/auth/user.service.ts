import {
    Inject,
    Injectable
} from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../db/schema';
import { PG_CONNECTION } from '../drizzle/constants';

@Injectable()
export class UserService {
    constructor(
      @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
    ) {}

    /**
     * ### 通过ID查找用户
     * @param id
     * @returns
     */
    async findUserById(id: number) {
      return this.db.query.users.findFirst({
        where: eq(schema.users.id, id),
      });
    }
}
