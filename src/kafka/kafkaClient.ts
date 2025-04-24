import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'order-app',
  brokers: ['localhost:9092']
});

export const producer = kafka.producer();

export const orderConsumer = kafka.consumer({ groupId: 'order-group' });
export const notificationConsumer = kafka.consumer({ groupId: 'notification-group' });