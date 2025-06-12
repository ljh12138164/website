import { Router, Query } from 'nestjs-trpc';
import { Inject } from '@nestjs/common';
import { z } from 'zod';
import { UserService } from './user.service';

const userSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  avatar: z.string(),
});

@Router()
export class UserRouter {
  constructor(@Inject(UserService) private userService: UserService){}

  @Query({ output: z.array(userSchema) })
  async findAll() {
    const users = await this.userService.findUserById(1);
    return users;
  }
}