import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  product: String,
  quantity: Number,
  price: Number,
}, { timestamps: true });

export const Order = model('Order', orderSchema);