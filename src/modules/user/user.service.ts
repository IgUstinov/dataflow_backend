import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { hashPassword } from 'src/utils/password-hash.util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'POSTGRES_CONNECTION')
    private usersRepository: Repository<User>,
  ) {}

  private async prepareUserData(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserDto> {
    const hashedPassword = await hashPassword(createUserDto.password);
    return {
      ...createUserDto,
      password: hashedPassword,
    };
  }

  async createUser(createUserDto: CreateUserDto) {
    const userToSave = await this.prepareUserData(createUserDto);
    return this.usersRepository.save(userToSave);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  findOneById(id: any): Promise<User> {
    return this.usersRepository.findOneBy(id);
  }
  findOneByUsername(username: any): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
