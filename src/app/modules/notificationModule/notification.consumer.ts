import { notificationConsumer } from "../../../kafka/kafkaClient"

export const runNotificationConsumer = async () => {
    await notificationConsumer.connect();
    await notificationConsumer.subscribe({topic: 'order-created', fromBeginning: true})

    await notificationConsumer.run({
        eachMessage: async({topic, partition, message}) => {
            const value = message.value?.toString();
            if(value){
                const order = JSON.parse(value);
                console.log(`Notification sent: new order for ${order.product}, received.`)
                console.log(`topic ${topic}, patition ${partition}`)
            }
        }
    })
    console.log("Notification consumer running....")
}

runNotificationConsumer()