import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import indexRoute from './routes/index';
import getBooks from './routes/getBooks';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/', indexRoute);
app.use('/api', getBooks);

app.listen(9000, () => console.log('Server Running on port 9000'));