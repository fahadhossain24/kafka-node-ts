import express from 'express';
import orderRouter from '../modules/orderModule/order.routes';


const routersVersionOne = express.Router();

routersVersionOne.use('/order', orderRouter)

export default routersVersionOne;
