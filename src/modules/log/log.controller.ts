import {
  Controller,
  Post,
  Body,
  Inject,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { LogService } from './log.service';

@Controller('logs')
export class LogController {
  constructor(
    @Inject()
    private logService: LogService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async createLog(
    @Body('message') message: string,
    @Body('level') level: string,
    @Body('metadata') metadata?: any,
  ) {
    return await this.logService.createLog(message, level, metadata);
  }
  @Get()
  findAll() {
    return this.logService.getAllLogs();
  }
}
