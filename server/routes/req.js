import express from 'express';

const router = express.Router();

router.post('/req', (req, res) => {
    const { body } = req;
    console.log('REQUEST HERE: ', body); 
});

export default router;
