import express from 'express';
import path from 'path';
import { readFile } from 'fs';

const router = express.Router();

router.get('/book/:id', (req, res) => {
    const { id } = req.query;
    readFile(path.join(__dirname, '..', 'data', 'data.json'), 'utf-8', (err, data) => {
        res.send(JSON.parse(data).filter(item => item.id === id)
            .map(item =>  { 
                return {
                    title: item.title, 
                    author: item.author, 
                    image: item.image,
                    description: item.description 
                };
            }));
    });
});

export default router;
