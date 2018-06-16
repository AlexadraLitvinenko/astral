import express from 'express';
import path from 'path';
//import { readFile } from 'fs';
const router = express.Router();

router.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'data', 'data.json'));
});


/*router.get('/books', (req, res) => {
    readFile(path.join(__dirname, '..', 'data', 'data.json'), 'utf-8', (err, data) => {
        res.send(data);
    });   
});*/

export default router;
