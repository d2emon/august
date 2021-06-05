import express from 'express';
import handlers, { getWikiBySlug } from '../handlers/page';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', handlers.addItem);
router.get('/id/:id', handlers.getItem);
router.get('/:id', getWikiBySlug);
router.put('/:id', handlers.updateItem);
router.delete('/:id', handlers.removeItem);

export default router;
