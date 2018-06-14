import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import indexRoute from './routes/index';
import req from './routes/req';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/', indexRoute);
app.use('/', req);

app.listen(9000, () => console.log('Server Running on port 9000'));