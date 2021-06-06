import express from 'express';
import handlers, { getServiceBySlug } from '../handlers/service';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', handlers.addItem);
router.get('/id/:id', handlers.getItem);
router.get('/:slug', getServiceBySlug);
router.put('/:id', handlers.updateItem);
router.delete('/:id', handlers.removeItem);

export default router;
