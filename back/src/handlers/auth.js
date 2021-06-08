import { authServer } from '../helpers/oauth2';
import AccessTokenModel from '../models/accessToken';
import RefreshTokenModel from '../models/refreshToken';

export const token = [
    authServer.token(),
    authServer.errorHandler(),
];

export const checkUser = async (req, res) => {
    try {
        return res.json({
            user: req.user,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
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
        return res.status(500).json({ error: e.message });
    }
};
