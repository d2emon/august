/**
 * Нормализация номера порта, на котором работает сервер
 * @param val
 * @returns {boolean|number}
 */
export default (val) => {
  const port = parseInt(val, 10);

  if (port >= 0) {
    return port;
  }

  return false;
};
