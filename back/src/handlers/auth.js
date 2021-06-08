/**
 * Обработчики запросов, связанных с авторизацией
 */
import { authServer } from '../helpers/oauth2';
import AccessTokenModel from '../models/accessToken';
import RefreshTokenModel from '../models/refreshToken';

/**
 * Обработчик запроса на получение токена авторизации
 * @type {*[]}
 */
export const token = [
    authServer.token(),
    authServer.errorHandler(),
];

/**
 * Обработчик запроса на проверку авторизационного токена
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const checkUser = async (req, res) => {
    try {
        return res.json({
            user: req.user,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

/**
 * Обработчик запроса на выход из системы
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
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
