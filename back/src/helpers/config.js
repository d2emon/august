/**
 * Настройки для серверной части
 */

export default {
    // Название сайта для логирования
    APP_NAME: process.env.APP_NAME || 'august',
    // Порт, на котором работает сервер
    PORT: process.env.PORT || 4000,
    // Сервер mongoDb
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/august',
    // Время жизни токена авторизации в секундах
    TOKEN_LIFETIME: process.env.TOKEN_LIFETIME || (30 * 60),
    // Идентификатор клиента для API
    CLIENT_ID: process.env.CLIENT_ID || 'augustClient',
    // Кодовая фраза для API
    CLIENT_SECRET: process.env.CLIENT_SECRET || 'thereisnospoon',
};