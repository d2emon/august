/**
 * Обработчики запросов, связанных с вики-страницами
 */
import Wiki from '../models/wiki';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление
 * вики-страниц из БД
 */
export default modelHandler(
    'pages',
    'page',
    Wiki,
    (data) => (new Wiki(data)),
);
