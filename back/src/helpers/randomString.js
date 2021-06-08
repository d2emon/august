import crypto from 'crypto';

/**
 * Генератор случайных строк заданной длины
 * @param size
 * @returns {string}
 */
export default (size=32) => crypto
    .randomBytes(size)
    .toString('base64');
