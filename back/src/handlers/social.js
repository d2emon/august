/**
 * Обработчики запросов, связанных с социальными сетями
 */
import Social from '../models/social';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление
 * социальных сетей из БД
 */
export default modelHandler(
    'socials',
    'social',
    Social,
    (data) => (new Social(data)),
);
