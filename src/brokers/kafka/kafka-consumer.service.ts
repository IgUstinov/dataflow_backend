import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaConsumerService {
  @EventPattern('my-topic')
  async handleEvent(@Payload() message: any) {
    console.log('Received message from Kafka:', message);
  }
}
