export default {
    APP_NAME: process.env.APP_NAME || 'august',
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/august',
    TOKEN_LIFETIME: process.env.TOKEN_LIFETIME || (30 * 60),
    CLIENT_ID: process.env.CLIENT_ID || 'augustClient',
    CLIENT_SECRET: process.env.CLIENT_SECRET || 'thereisnospoon',
};