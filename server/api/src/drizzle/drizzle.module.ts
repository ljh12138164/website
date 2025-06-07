import { Module } from '@nestjs/common';
import { drizzleProvider } from './drizzle.provider';
import { PG_CONNECTION } from './constants';

@Module({
  providers: [drizzleProvider],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
