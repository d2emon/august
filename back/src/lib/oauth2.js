import oauth2orize from 'oauth2orize';
import passport from 'passport';
/*
import randomString from '../oauth/helpers/randomString';
import UserModel from '../oauth/models/user';
import AccessTokenModel from '../oauth/models/access_token';
import RefreshTokenModel from '../oauth/models/refresh_token';
 */

// Создаем сервер OAuth 2.0

export const authServer = oauth2orize.createServer();

/*
const updateTokens = async (userId, clientId) => {
    await Promise.all([
        RefreshTokenModel.remove({ userId, clientId }),
        AccessTokenModel.remove({ userId, clientId }),
    ]);

    const tokenValue = randomString();
    const token = new AccessTokenModel({
        token: tokenValue,
        clientId,
        userId,
    });

    const refreshTokenValue = randomString();
    const refreshToken = new RefreshTokenModel({
        token: refreshTokenValue,
        clientId,
        userId,
    });

    await Promise.all([
        token.save(),
        refreshToken.save(),
    ]);

    return {
        tokenValue,
        refreshTokenValue,
        options: {'expires_in': process.env.TOKEN_LIFETIME},
    };
};
*/

/*
// Exchange username & password for access token.
authServer.exchange(oauth2orize.exchange.password(async (client, username, password, scope, done) => {
    try {
        const user = await UserModel.findOne({
            username: username,
            isValid: true,
            isBanned: false,
        });

        if (!user) {
            return done(null, false);
        }
        if (!user.checkPassword(password)) {
            return done(null, false);
        }

        const result = await updateTokens(user.userId, client.clientId);
        return done(
            null,
            result.tokenValue,
            result.refreshTokenValue,
            result.options,
        );
    } catch (e) {
        return done(e);
    }
}));
*/

/*
// Exchange refreshToken for access token.
authServer.exchange(oauth2orize.exchange.refreshToken(async (client, refreshToken, scope, done) => {
    try {
        const oldRefreshToken = await RefreshTokenModel.findOne({ token: refreshToken });
        if (!oldRefreshToken) {
            return done(null, false);
        }

        const user = await UserModel.findById(oldRefreshToken.userId);
        if (!user || !user.isValid || user.isBanned) {
            return done(null, false);
        }

        const result = await updateTokens(user.userId, client.clientId);
        return done(
            null,
            result.tokenValue,
            result.refreshTokenValue,
            result.options,
        );
    } catch (e) {
        return done(e);
    }
}));
*/

// Получение токена
export const getToken = passport.authenticate(
    ['basic', 'oauth2-client-password'],
    { session: false },
);

/*
export const authUser = passport.authenticate(
    'bearer',
    { session: false },
);
*/

/*
export const authLogin = passport.authenticate(
    'oauth2-client-password',
    { session: false },
);
*/
