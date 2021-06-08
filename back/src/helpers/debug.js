/**
 * Хелпер для отладки сервера
 */
import debug from 'debug';
import config from './config';

export default namespace => debug(namespace ? `${config.APP_NAME}:${namespace}` : config.APP_NAME);
