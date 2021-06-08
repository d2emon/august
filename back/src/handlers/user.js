/**
 * Обработчики запросов, связанных с пользователями
 */
import User from '../models/user';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление
 * пользователя из БД
 */
export default modelHandler(
    'users',
    'user',
    User,
    (data) => (new User(data)),
);
