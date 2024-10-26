import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Query } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {

    constructor(
        @Inject()
        private userService: UserService
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Get('username')
    findOneByUsername(@Query('username') username) {
        console.log('findOneByUsername', username)
        if (username)
            return this.userService.findOneByUsername(username);
    }
}