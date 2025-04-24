import express from 'express'
import { createOrder } from './order.controllers';

const orderRouter = express.Router()

orderRouter.post('/create', createOrder)

export default orderRouter;