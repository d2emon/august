import express from 'express';
import {
    articles,
    categories,
    getBlog,
} from '../handlers/blog';

const router = express.Router();

router.get('/', getBlog);
router.get('/articles', articles.getItems);
router.post('/articles', articles.addItem);
router.get('/articles/:id', articles.getItem);
router.put('/articles/:id', articles.updateItem);
router.delete('/articles/:id', articles.removeItem);
router.get('/categories', categories.getItems);
router.post('/categories', categories.addItem);
router.get('/categories/:id', categories.getItem);
router.put('/categories/:id', categories.updateItem);
router.delete('/categories/:id', categories.removeItem);

export default router;
