/**
 * Обработчики ошибок
 */

/**
 * Базовый обработчик ошибок сервера
 * @param message
 * @param code
 * @param data
 * @returns {{error: {code: number, data, message}}}
 */
const errorResponse = (message, code, data) => ({
    error: {
        code: code || 500,
        message,
        data,
    },
})

/**
 * Обработчик ошибки 404 - страница не найдена
 * @param req
 * @param res
 */
export const error404 = (req, res) => res
    .status(404)
    .json(errorResponse('Not Found', 404))

/**
 * Обработчик ошибки 500 - ошибка сервера
 * @param env
 * @returns {function(*, *, *): *}
 */
export const errorHandler = (env) => (error, req, res) => res
    .status(error.status || 500)
    .json(errorResponse(
        error.message,
        error.status,
        (env === 'development') ? error : undefined,
    ))
