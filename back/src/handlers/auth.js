import { authServer } from '../helpers/oauth2';
/*
import UserModel from '../oauth/models/user';
import randomString from '../oauth/helpers/randomString';
*/
import AccessTokenModel from '../models/accessToken';
import RefreshTokenModel from '../models/refreshToken';

export const token = [
    authServer.token(),
    authServer.errorHandler(),
];

/*
export const createUser = async (req, res) => {
    try {
        const {
            username,
            password,
            email,
        } = req.body;
        const validationCode = `${randomString(6)}-${username}`;

        const user = new UserModel({
            username,
            password,
            // perms: 'admin',
            email,
            // rankings: 'Newbie',
            validationCode,
            // isEmailSent: false,
            // postTradeScreen: null,
        });
        await user.save();

        console.log(`Your validation code is: ${user.validationCode}\n`
            + '\n'
            + 'The Merchant Empires server is on the web at http://www.merchantempires.net');

        return res.json({
            result: true,
            title: 'Success',
            message: 'Your Merchant Empires user was successfully created.\n'
                + '\n'
                + 'An email containing a validation code has been sent to your address.'
                + 'In order to log into Merchant Empires, '
                + 'you must retrieve that code and enter it at the validation page.',
        });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
};
*/

export const checkUser = async (req, res) => {
    try {
        console.log('USER', req.user);
        return res.json({
            user: req.user,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

export const logout = async (req, res) => {
    try {
        console.log('USER', req.user);
        const userId = req.user.userId;
        await Promise.all([
            RefreshTokenModel.remove({ userId }),
            AccessTokenModel.remove({ userId }),
        ]);

        return res.json({
            result: true,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
