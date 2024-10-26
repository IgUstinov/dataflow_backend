import { Controller, Get, Inject, Query } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        @Inject()
        private userService: UserService
    ) {}

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