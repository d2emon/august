export default (model, newModel) => ({
    getItems: async (req, res) => {
        try {
            const query = {};
            const services = await model.find(query);
            return res.json({ services });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    addItem: async (req, res) => {
        try {
            const record = newModel(req.body);
            const result = await record.save();
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    getItem: async (req, res) => {
        try {
            const service = await model.findById(req.params.id);
            return res.json({ service });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    updateItem: async (req, res) => {
        try {
            const result = await model.findByIdAndUpdate(req.params.id, req.body);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },

    removeItem: async (req, res) => {
        try {
            const result = await model.findByIdAndDelete(req.params.id);
            return res.json({ result });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
});
