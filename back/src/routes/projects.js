import express from 'express';
import handlers, { getLatestProjects } from '../handlers/project';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', handlers.addItem);
router.get('/latest', getLatestProjects);
router.get('/:id', handlers.getItem);
router.put('/:id', handlers.updateItem);
router.delete('/:id', handlers.removeItem);

export default router;
