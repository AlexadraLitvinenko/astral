import express from 'express';
import path from 'path';
import { readFile } from 'fs';

const router = express.Router();

router.get('/books', (req, res) => {
    readFile(path.join(__dirname, '..', 'data', 'data.json'), 'utf-8', (err, data) => {
        res.send(JSON.parse(data).map(item => { 
            return {
                id: item.id, 
                title: item.title, 
                author: item.author, 
                image: item.image 
            };
        }));
    });
});

export default router;
