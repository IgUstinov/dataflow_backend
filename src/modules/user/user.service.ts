import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}
    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    } 
    findOneById(id: any): Promise<User> {
        return this.usersRepository.findOneBy(id);
    }
    findOneByUsername(username: any): Promise<User> {
        return this.usersRepository.findOneBy({username});
    }
    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}