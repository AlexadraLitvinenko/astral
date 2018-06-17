import express from 'express';
import path from 'path';
import { readFile } from 'fs';
const router = express.Router();

router.post('/book/:id', (req, res) => {
    const { id } = req.body;
    readFile(path.join(__dirname, '..', 'data', 'data.json'), 'utf-8', (err, data) => {
        res.send(JSON.parse(data).filter(item => item.id === id)
            .map(item => Object.assign({}, { 
                title: item.title, 
                author: item.author, 
                image: item.image,
                description: item.description 
            })));
        //console.log('ID HERE: ', req.body);
        //console.log('DATA: ', JSON.parse(data));
    });
});

export default router;

/*router.get('/books', (req, res) => {
    readFile(path.join(__dirname, '..', 'data', 'data.json'), 'utf-8', (err, data) => {
        res.send(data);
    });   
});
*/