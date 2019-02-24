import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';

import indexRouter from './indexRouter/index';
import Users from './users/index';
// console.log(Users);

const app = express();
const port = process.env.PORT || 3001; //sto tocno e process.env.PORT

app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(indexRouter);

app.listen(port, () => {
  console.log(`API is running on ${port}`)
})
