import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import sendFile from './routes/sendFile';
import getItems from './routes/getItems';
import getItem from './routes/getItem';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/', sendFile);
app.use('/api', getItems, getItem);

app.listen(9000, () => console.log('Server Running on port 9000'));