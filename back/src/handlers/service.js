import Service from '../models/service';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'services',
    'service',
    Service,
    (data) => (new Service(data)),
);

export const getServiceBySlug = async (req, res) => {
    try {
        const service = await Service.findOne({ slug: req.params.slug });
        return res.json({ service });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
