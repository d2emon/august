import express from 'express';
import handlers from '../handlers/service';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', handlers.addItem);
router.get('/id/:id', handlers.getItem);
router.get('/:slug', handlers.getItemBySlug);
router.get('/:id', handlers.getItem);
router.put('/:id', handlers.updateItem);
router.delete('/:id', handlers.removeItem);

export default router;
