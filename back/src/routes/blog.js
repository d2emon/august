import express from 'express';
import {
    articles,
    categories,
    getBlog,
    viewArticle,
    viewLatestArticle,
    articlesByCategory,
} from '../handlers/blog';
import {
    authUser,
} from '../helpers/passportHelper';

const router = express.Router();

router.get('/', getBlog);

router.get('/articles', articles.getItems);
router.post('/articles', authUser, articles.addItem);
router.get('/articles/latest', viewLatestArticle);
router.get('/articles/id/:id', articles.getItem);
router.get('/articles/:slug', viewArticle);
router.put('/articles/:id', authUser, articles.updateItem);
router.delete('/articles/:id', authUser, articles.removeItem);

router.get('/categories', categories.getItems);
router.post('/categories', authUser, categories.addItem);
router.get('/categories/id/:id', categories.getItem);
router.get('/categories/:slug', categories.getItemBySlug);
router.get('/categories/:slug/articles', articlesByCategory);
router.put('/categories/:id', authUser, categories.updateItem);
router.delete('/categories/:id', authUser, categories.removeItem);

export default router;
