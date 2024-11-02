import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
    constructor(@Inject('RMQ_DATAFLOW') private readonly client: ClientProxy) {}

    sendNotification() {
        this.client.emit('test_notifications', { message: 'Hello, World!' });
    }
}
