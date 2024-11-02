import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { RabbitMQService } from './rabbitmq.service';

@Controller('rabbitmq')
export class RabbitMQController {
    constructor(private readonly rabbitMQService: RabbitMQService) {}

    @Post('send')
    @HttpCode(HttpStatus.OK)
    async sendMessage(
        @Body('exchange') exchange: string,
        @Body('routingKey') routingKey: string,
        @Body('message') message: any,
    ) {
        await this.rabbitMQService.publishMessage(exchange, routingKey, message);
        return { message: 'Message sent to RabbitMQ' };
    }
}
