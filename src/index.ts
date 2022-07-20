import express from 'express';
import { config } from 'dotenv';

import productRouter from './routes/product';
import searchRouter from './routes/search';

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Shoppgin App API server');
});
app.use('/product', productRouter);
app.use('/search', searchRouter);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
