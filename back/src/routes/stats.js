import express from 'express';
import {
    authUser,
} from '../helpers/passportHelper';
import { addStats, getStats } from '../handlers/stats';

const router = express.Router();

router.get('/', authUser, getStats);
router.post('/', addStats);

export default router;
