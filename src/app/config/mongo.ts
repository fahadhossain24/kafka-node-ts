import mongoose from 'mongoose';

const mongoUri = 'mongodb://localhost:27017/kafka_orders';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));