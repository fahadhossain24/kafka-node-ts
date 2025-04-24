import { producer } from "../../../kafka/kafkaClient";

export const sendOrderToKafka = async (orderData: any) => {
  await producer.connect();
  await producer.send({
    topic: 'order-created',
    messages: [
      { value: JSON.stringify(orderData) }
    ],
  });
};