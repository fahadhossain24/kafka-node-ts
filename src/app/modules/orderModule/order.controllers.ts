import { Request, Response, Router } from "express";
import { sendOrderToKafka } from "./order.producer";

// controller for create order
export const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;

  try {
    await sendOrderToKafka(orderData);
    res.status(200).json({ message: "Order sent to Kafka!" });
  } catch (err) {
    console.error("Error sending order:", err);
    res.status(500).json({ message: "Error processing order" });
  }
};
