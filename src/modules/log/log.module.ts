import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogEntity } from './models/log.entity';
import { LogService } from './log.service';
import { LogController } from './log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity], 'MONGO_CONNECTION')],
  providers: [LogService],
  controllers: [LogController],
  exports: [LogService],
})
export class LogModule {}
