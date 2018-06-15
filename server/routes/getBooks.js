import express from 'express';

const router = express.Router();
const obj = ['werty', 'ertyujkb'];

router.get('/books', (req, res) => {
    res.send(obj);
});

export default router;
