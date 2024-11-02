import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitMQService } from './rabbitmq.service';
import { RabbitMQController } from './rabbitmq.controller';

@Module({
    imports: [
        RabbitMQModule.forRoot(RabbitMQModule, {
            exchanges: [
                {
                    name: 'my-exchange',
                    type: 'topic',
                },
            ],
            uri: 'amqp://user:password@localhost:5672',
            connectionInitOptions: { wait: false },
        }),
    ],
    controllers: [RabbitMQController],
    providers: [RabbitMQService],
    exports: [RabbitMQService],
})
export class RabbitMQMessagingModule {}
