/**
 * Работа с passport
 */
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import config from './config';
import UserModel from '../models/user';
import AccessTokenModel from '../models/accessToken';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

/**
 * Обработчик стратегии Basic
 */
passport.use(new BasicStrategy(async (clientId, clientSecret, done) => {
    try {
        const client = {
            clientId: config.CLIENT_ID,
            clientSecret: config.CLIENT_SECRET,
        }
        if ((clientId !== client.clientId) || (clientSecret !== client.clientSecret)) {
            return done(null, false);
        }
        return done(null, client);
    } catch (e) {
        return done(e);
    }
}));

/**
 * Обработчик стратегии Bearer
 */
passport.use(new BearerStrategy(async (token, done) => {
    try {
        const accessToken = await AccessTokenModel.findOne({ token });
        if (!accessToken) {
            return done(null, false);
        }

        const lifetime = config.TOKEN_LIFETIME;
        if (Math.round((Date.now() - accessToken.created) / 1000) > lifetime) {
            await AccessTokenModel.deleteMany({ token });
            return done(null, false, { message: 'Token expired' });
        }

        const user = await UserModel.findById(accessToken.userId);
        if (!user) {
            return done(null, false, { message: 'Unknown user' })
        }

        return done(null, user, { scope: '*' });
    } catch (e) {
        return done(e);
    }
}));

/**
 * Получение токена авторизации
 */
export const getToken = passport.authenticate(
    'basic', // ['basic', 'oauth2-client-password'],
    { session: false },
);

/**
 * Проверка токена авторизации
 */
export const authUser = passport.authenticate(
    'bearer',
    { session: false },
);

export default passport;
