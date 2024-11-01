import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LogService } from '../log/log.service';

@Controller('user')
export class UserController {
  constructor(
    @Inject()
    private userService: UserService,
    @Inject()
    private logService: LogService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto);
    await this.logService.createLog(`User created: ${user.username}`, 'info', {
      userId: user.id,
    });
    return user;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get('username')
  findOneByUsername(@Query('username') username) {
    console.log('findOneByUsername', username);
    if (username) return this.userService.findOneByUsername(username);
  }
}
