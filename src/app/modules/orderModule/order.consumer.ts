import { orderConsumer } from "../../../kafka/kafkaClient";
import { Order } from "./order.model";

const topic = 'order-created'

const runConsumer = async () => {
  await orderConsumer.connect();
  await orderConsumer.subscribe({ topic, fromBeginning: true });

  await orderConsumer.run({
    eachMessage: async ({ message }) => {
      if (message.value) {
        const data = JSON.parse(message.value.toString());
        const aa = await Order.create(data);
        console.log('Order saved:', aa);
      }
    },
  });
};

runConsumer();