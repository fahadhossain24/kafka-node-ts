import app from './app';
import './app/config/mongo';
import './kafka/consumer';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
