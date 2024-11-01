import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogEntity } from './models/log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity, 'MONGO_CONNECTION')
    private logRepository: Repository<LogEntity>,
  ) {}

  async createLog(message: string, level: string, metadata?: any) {
    console.log(message, level, metadata);
    return this.logRepository.save({
      message,
      level,
      timestamp: new Date(),
      metadata,
    });
  }

  async getAllLogs(): Promise<LogEntity[]> {
    return this.logRepository.find();
  }
}
