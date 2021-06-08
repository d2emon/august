import express from 'express';
import {
    token,
    logout,
    checkUser,
} from '../handlers/auth';
import {
    authUser,
    getToken,
} from '../helpers/passportHelper';

const router = express.Router();

router.post('/token', getToken, token);
router.post('/logout', authUser, logout);
router.get('/check', authUser, checkUser);

export default router;
