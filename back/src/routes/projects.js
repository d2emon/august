import express from 'express';
import handlers, {
    getLatestProjects,
    getServiceProjects,
} from '../handlers/project';
import {
    authUser,
} from '../helpers/passportHelper';

const router = express.Router();

router.get('/', handlers.getItems);
router.post('/', authUser, handlers.addItem);
router.get('/latest', getLatestProjects);
router.get('/service/:serviceId', getServiceProjects);
router.get('/id/:id', handlers.getItem);
router.get('/:slug', handlers.getItemBySlug);
router.put('/:id', authUser, handlers.updateItem);
router.delete('/:id', authUser, handlers.removeItem);

export default router;
