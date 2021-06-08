import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import config from './config';
import UserModel from '../models/user';
import AccessTokenModel from '../models/accessToken';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

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

/*
passport.use(new ClientPasswordStrategy(async (username, password, done) => {
    console.log('CLIENT PASSWORD', username, password);
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return done(null, false);
        }
        if (user.password !== password) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e);
    }
}));
*/

passport.use(new BearerStrategy(async (token, done) => {
    console.log('BEARER', token);
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

// Получение токена
export const getToken = passport.authenticate(
    'basic', // ['basic', 'oauth2-client-password'],
    { session: false },
);

export const authUser = passport.authenticate(
    'bearer',
    { session: false },
);

/*
export const authLogin = passport.authenticate(
    'oauth2-client-password',
    { session: false },
);
*/

export default passport;
