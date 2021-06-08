/**
 * Обработчики запросов от формы обратной связи
 */
import Feedback from '../models/feedback';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление адреса
 * для рассылки из БД
 */
export default modelHandler(
    'emails',
    'email',
    Feedback,
    (data) => (new Feedback(data)),
);
