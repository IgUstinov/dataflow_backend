import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { LogModule } from '../log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([User], 'POSTGRES_CONNECTION'), LogModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
