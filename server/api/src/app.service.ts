import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from './drizzle/constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './db/schema';

@Injectable()
export class AppService {
  constructor(
    @Inject(PG_CONNECTION) private db: NodePgDatabase<typeof schema>
  ) {}
}
