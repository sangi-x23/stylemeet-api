import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

import { RegisterUserDto } from './dtos/register-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async registerUser(@Body() dto: RegisterUserDto) {
    return this.usersService.registerUser(dto);
  }
}
