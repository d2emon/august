/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление записей в БД
 * @param itemsKey - ключ для множественного ответа
 * @param itemKey - ключ для одиночного ответа
 * @param model - модель
 * @param newModel - функция, создающая новую модель
 * @returns {{getItems: (function(*, *): Promise<*|undefined>), addItem: (function(*, *): Promise<*|undefined>), removeItem: (function(*, *): Promise<*|undefined>), getItem: (function(*, *): Promise<*|undefined>), getItemBySlug: (function(*, *): Promise<*|undefined>), updateItem: (function(*, *): Promise<*|undefined>)}}
 */
export default (itemsKey, itemKey, model, newModel) => ({
    /**
     * Обработчик запроса на получение списка записей
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    getItems: async (req, res) => {
        try {
            const query = {};
            const items = await model.find(query);
            return res.json({ [itemsKey]: items });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    /**
     * Обработчик запроса на добавление записи
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    addItem: async (req, res) => {
        try {
            const record = newModel(req.body);
            const result = await record.save();
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    /**
     * Обработчик запроса на получение одной записи по идентификатору
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    getItem: async (req, res) => {
        try {
            const item = await model.findById(req.params.id);
            return res.json({ [itemKey]: item });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    /**
     * Обработчик запроса на получение записи по человекопонятной ссылке
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    getItemBySlug: async (req, res) => {
        try {
            const item = await model.findOne({ slug: req.params.slug });
            return res.json({ [itemKey]: item });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    /**
     * Обработчик запроса на обновление записи
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    updateItem: async (req, res) => {
        try {
            const result = await model.findByIdAndUpdate(req.params.id, req.body);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    /**
     * Обработчик запроса на удаление записи
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    removeItem: async (req, res) => {
        try {
            const result = await model.findByIdAndDelete(req.params.id);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
});
