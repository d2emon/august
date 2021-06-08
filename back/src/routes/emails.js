import express from 'express';
import handlers from '../handlers/feedback';
import {
    authUser,
} from '../helpers/passportHelper';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', handlers.addItem);
router.get('/id/:id', handlers.getItem);
router.get('/:slug', handlers.getItemBySlug);
router.put('/:id', authUser, handlers.updateItem);
router.delete('/:id', authUser, handlers.removeItem);

export default router;
