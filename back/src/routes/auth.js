import express from 'express';
import {
    token,
    // createUser,
    // validateUser,
    logout,
} from '../handlers/auth';
/*
import {
    getMe
} from '../handlers/users';
*/
import {
    authUser,
    getToken,
} from '../helpers/passportHelper';

const router = express.Router();

router.post('/token', getToken, token);
router.post('/logout', authUser, logout);
// router.post('/sign-in', createUser);
// router.post('/validate', validateUser);
// router.get('/me', authUser, getMe);

export default router;
