import Wiki from '../models/wiki';
import modelHandler from '../helpers/modelHandler';

export default modelHandler(
    'pages',
    'page',
    Wiki,
    (data) => (new Wiki(data)),
);

export const getWikiBySlug = async (req, res) => {
    try {
        const page = await Wiki.findOne({ slug: req.params.slug });
        return res.json({ page });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}