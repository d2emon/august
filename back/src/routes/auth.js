import express from 'express';
import {
    token,
    // createUser,
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
// router.post('/sign-in', createUser);

export default router;
