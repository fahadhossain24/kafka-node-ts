import express from 'express';
import routers from './app/routes';

const app = express();

app.use(express.json());
app.use('/', routers);

export default app;