/**
 * Обработчики запросов, связанных с блогом
 */
import Article from '../models/article';
import Category from '../models/category';
import modelHandler from '../helpers/modelHandler';

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление статей
 */
export const articles = modelHandler(
    'articles',
    'article',
    Article,
    (data) => (new Article(data)),
);

/**
 * Обработчики запросов на создание, просмотр, редактирование и удаление категорий
 */
export const categories = modelHandler(
    'categories',
    'category',
    Category,
    (data) => (new Category(data)),
);

/**
 * Обработчик запроса на получение популярных и недавних статей
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getBlog = async (req, res) => {
    try {
        const query = {};
        const categories = await Category.find(query);
        const popular = await Article.find(query).sort({ viewed: -1 }).limit(3);
        const recent = await Article.find(query).sort({ date: -1 }).limit(3);
        return res.json({
            categories,
            popular,
            recent,
        });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

/**
 * Обновление счетчика просмотров для страницы
 * Добавление в статью ссылки на предыдущую и следующую статью
 * @param article
 * @returns {Promise<{date, viewed: *, nextPost: (*|null), id, text, categories, prevPost: (*|null), title, slug}>}
 */
const getArticle = async (article) => {
    let prevPost = null;
    let nextPost = null;
    if (article) {
        article.viewed = (article.viewed || 0) + 1;
        await article.save();
        prevPost = await Article.findOne({ date: { $lt: article.date }}).sort({ date: -1 });
        nextPost = await Article.findOne({ date: { $gt: article.date }}).sort({ date: 1 });
    }
    return {
        id: article.id,
        slug: article.slug,
        title: article.title,
        date: article.date,
        text: article.text,
        viewed: article.viewed,
        categories: article.categories,
        prevPost: prevPost ? prevPost.slug : null,
        nextPost: nextPost ? nextPost.slug : null,
    };
};

/**
 * Обработчик запроса на получение списка статей в категории
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const articlesByCategory = async (req, res) => {
    try {
        const category = await Category.findOne({ slug: req.params.slug });
        const articles = category
            ? await Article.find({ categories: { $in: [category.id] } })
            : [];
        return res.json({ articles });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

/**
 * Обработчик запроса на просмотр статьи из блога
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const viewArticle = async (req, res) => {
    try {
        const result = await Article.findOne({ slug: req.params.slug });
        const article = await getArticle(result);
        return res.json({ article });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}

/**
 * Обработчик запроса на просмотр последней статьи из блога
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const viewLatestArticle = async (req, res) => {
    try {
        const result = await Article.findOne().sort({ date: -1 });
        const article = await getArticle(result);
        return res.json({ article });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}
