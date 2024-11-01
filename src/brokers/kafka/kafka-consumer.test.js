const { Kafka } = require('kafkajs');

async function runConsumer() {
  const kafka = new Kafka({
    clientId: 'test-consumer',
    brokers: ['localhost:9092'],  // также укажите локальный адрес
  });

  const consumer = kafka.consumer({ groupId: 'test-group' });
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  console.log('Consumer is listening...');
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
}

runConsumer().catch(console.error);
