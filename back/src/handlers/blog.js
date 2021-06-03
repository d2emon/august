import Article from '../models/article';
import Category from '../models/category';
import modelHandler from '../helpers/modelHandler';

export const articles = modelHandler(Article, (data) => (new Article(data)));

export const categories = modelHandler(Category, (data) => (new Category(data)));

export const getBlog = async (req, res) => {
    try {
        const query = {};
        const article = await Article.findById(req.params.id);
        const categories = await Category.find(query);
        const popular = await Article.find(query);
        const recent = await Article.find(query);
        return res.json({
            article,
            categories,
            popular,
            recent,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
