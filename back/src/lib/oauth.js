/*
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { Strategy as ClientPasswordStrategy } from 'passport-oauth2-client-password';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import UserModel from '../oauth/models/user';
import ClientModel from '../oauth/models/client';
import AccessTokenModel from '../oauth/models/access_token';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new BasicStrategy(async (user, password, done) => {
    console.log('Basic Strategy', user, password);
    try {
        const client = await ClientModel.findOne({clientId: username});
        if (!client) {
            return done(null, false);
        } else if (client.clientSecret !== password) {
            return done(null, false);
        } else {
            return done(null, client);
        }
    } catch (e) {
        return done(e);
    }
}));

passport.use(new ClientPasswordStrategy(async (clientId, clientSecret, done) => {
    console.log('Client Password Strategy', clientId, clientSecret);
    try {
        console.log('Client Password Strategy', clientId, clientSecret);
        const client = await ClientModel.findOne({ clientId });
        console.log(client);
        if (!client) {
            return done(null, false);
        } else if (client.clientSecret !== clientSecret) {
            return done(null, false);
        } else {
            return done(null, client);
        }
    } catch (e) {
        return done(e);
    }
}));

passport.use(new BearerStrategy(async (accessToken, done) => {
    console.log('Bearer Strategy', accessToken);
    try {
        const token = await AccessTokenModel.findOne({ token: accessToken });
        if (!token) {
            return done(null, false);
        }

        if (Math.round((Date.now() - token.created) / 1000) > process.env.TOKEN_LIFETIME) {
            await AccessTokenModel.deleteMany({ token: accessToken });
            return done(null, false, { message: 'Token expired' });
        }

        const user = await UserModel.findById(token.userId);
        if (!user || !user.isValid || user.isBanned) {
            return done(null, false, { message: 'Unknown user' });
        }
        return done(null, user, { scope: '*' });
    } catch (e) {
        return done(e);
    }
}));

export default passport;
*/
