import express from 'express';
import {
    articles,
    categories,
    getBlog,
    viewArticle,
    viewLatestArticle,
    articlesByCategory,
} from '../handlers/blog';

const router = express.Router();

router.get('/', getBlog);

router.get('/articles', articles.getItems);
router.post('/articles', articles.addItem);
router.get('/articles/latest', viewLatestArticle);
router.get('/articles/id/:id', articles.getItem);
router.get('/articles/:slug', viewArticle);
router.put('/articles/:id', articles.updateItem);
router.delete('/articles/:id', articles.removeItem);

router.get('/categories', categories.getItems);
router.post('/categories', categories.addItem);
router.get('/categories/id/:id', categories.getItem);
router.get('/categories/:slug', categories.getItemBySlug);
router.get('/categories/:slug/articles', articlesByCategory);
router.put('/categories/:id', categories.updateItem);
router.delete('/categories/:id', categories.removeItem);

export default router;
