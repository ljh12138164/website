import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  users() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() user: UserCreateDto) {
    if (!user.fullName || !user.email || !user.password) {
      throw new BadRequestException('用户名、邮箱、密码不能为空');
    }
    return this.userService.createUser(user);
  }
}
