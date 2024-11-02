import { Injectable } from '@nestjs/common';
import { AmqpConnection, RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitMQService {
    constructor(private readonly amqpConnection: AmqpConnection) {}

    async publishMessage(exchange: string, routingKey: string, message: any) {
        try {
            await this.amqpConnection.publish(exchange, routingKey, message);
            console.log(`Message sent to ${exchange} with routing key ${routingKey}`);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    // @RabbitRPC({
    //     exchange: 'my-exchange',
    //     routingKey: 'my-routing-key',
    //     queue: 'my-queue'
    // })
    // async handleEvent(message: any) {
    //     console.log('Received message from RabbitMQ:', message);
    // }
}
