/*
import {
    authServer,
} from '../lib/oauth2';
import UserModel from '../oauth/models/user';
import {errorResponse} from '../oauth/helpers/response';
import randomString from '../oauth/helpers/randomString';
import AccessTokenModel from "../oauth/models/access_token";
import RefreshTokenModel from "../oauth/models/refresh_token";

export const token = [
    authServer.token(),
    authServer.errorHandler(),
];

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

export const validateUser = async (req, res) => {
    try {
        const {
            validationCode,
        } = req.body;
        if (!validationCode) {
            return res.status(400).json(errorResponse(new Error('No code submitted')));
        }
        if (validationCode.length > 40) {
            return res.status(400).json(errorResponse(new Error('The length of the validation code is limited to 40 characters')));
        }

        const user = await UserModel.findOne({ validationCode });
        if (!user) {
            return res.status(400).json(errorResponse(new Error('Incorrect Code')));
        }
        if (user.isValid) {
            return res.status(400).json(errorResponse(new Error('That user has already been validated')));
        }
        user.isValid = true;
        user.save();

        return res.json({
            result: true,
            title: 'Success',
            message: 'Your Merchant Empires user was successfully validated.\n'
                + '\n'
                + 'You may now log in and join the game of Merchant Empires.',
        });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
};

export const logout = async (req, res) => {
    try {
        const userId = req.user.userId;
        await Promise.all([
            RefreshTokenModel.remove({ userId }),
            AccessTokenModel.remove({ userId }),
        ]);

        return res.json({
            result: true,
        });
    } catch (e) {
        res.status(500).json(errorResponse(e));
    }
};
*/
