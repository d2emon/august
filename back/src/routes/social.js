import express from 'express';
import handlers from '../handlers/social';
import {
    authUser,
} from '../helpers/passportHelper';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', authUser, handlers.addItem);
router.get('/:id', handlers.getItem);
router.put('/:id', authUser, handlers.updateItem);
router.delete('/:id', authUser, handlers.removeItem);

export default router;
