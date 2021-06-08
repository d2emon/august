/**
 * Обработчики запросов, связанных с услугами
 */
import Service from '../models/service';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление услуги
 * из БД
 */
export default modelHandler(
    'services',
    'service',
    Service,
    (data) => (new Service(data)),
);
