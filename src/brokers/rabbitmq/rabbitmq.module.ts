import { Module } from '@nestjs/common';
import { RabbitMQController } from './rabbitmq.controller.test';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from './rabbitmq.service.test';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'RMQ_DATAFLOW',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://user:password@localhost:5672'],
            queue: 'my_queue_new_2',
            noAck: true,
            queueOptions: {
              durable: false
            },
          },
        },
      ]),
    ],
    controllers: [RabbitMQController],
    providers: [RabbitMQService],
    exports: [],
})
export class RabbitMQModule {}
