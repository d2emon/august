import oauth2orize from 'oauth2orize';
import config from './config';
import UserModel from '../models/user';
import AccessTokenModel from '../models/accessToken';
import RefreshTokenModel from '../models/refreshToken';

// Создаем сервер OAuth 2.0
export const authServer = oauth2orize.createServer();

const updateTokens = async (userId) => {
    const updateAccessToken = async () => {
        AccessTokenModel.remove({ userId });
        const token = new AccessTokenModel({
            userId,
        });
        await token.save();
        return token;
    };
    const updateRefreshToken = async () => {
        RefreshTokenModel.remove({ userId });
        const token = new RefreshTokenModel({
            userId,
        });
        await token.save();
        return token;
    };

    const [
        accessToken,
        refreshToken,
    ] = await Promise.all([
        updateAccessToken(),
        updateRefreshToken(),
    ]);
    return {
        accessToken: accessToken.token,
        refreshToken: refreshToken.token,
        options: {
            'expires_in': config.TOKEN_LIFETIME,
        },
    };
};

// Отдаем accessToken в ответ на логин и пароль
authServer.exchange(oauth2orize.exchange.password(async (client, username, password, scope, done) => {
    try {
        const user = await UserModel.findOne({ username });
        if (!user) {
            return done(null, false);
        }

        if (!user.checkPassword(password)) {
            return done(null, false);
        }

        const result = await updateTokens(user.id);
        return done(
            null,
            result.accessToken,
            result.refreshToken,
            result.options,
        );
    } catch (e) {
        return done(e)
    }
}));

// Отдаем accessToken в ответ на refreshToken
authServer.exchange(oauth2orize.exchange.refreshToken(async (client, refreshToken, scope, done) => {
    try {
        const oldToken = await RefreshTokenModel.findOne({ refreshToken });
        if (!oldToken) {
            return done(null, false);
        }

        const user = await UserModel.findById(oldToken.userId);
        if (!user) {
            return done(null, false);
        }

        const result = await updateTokens(user.id);
        return done(
            null,
            result.accessToken,
            result.refreshToken,
            result.options,
        );
    } catch (e) {
        return done(e)
    }
}));
