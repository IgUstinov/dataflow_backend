const { Kafka } = require('kafkajs');

async function runProducer() {
  const kafka = new Kafka({
    clientId: 'test-producer',
    brokers: ['localhost:9092'],  // для локального тестирования используйте 'localhost:9092'
  });

  const producer = kafka.producer();
  await producer.connect();

  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello, Kafka!' }],
  });

  console.log('Message sent!');
  await producer.disconnect();
}

runProducer().catch(console.error);
