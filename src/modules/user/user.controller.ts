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
}