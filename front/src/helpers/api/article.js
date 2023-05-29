import markdown from '../markdown';
import api from './api';

export const prepareArticle = (article) => (article ? {
  id: article.id,
  slug: article.slug,
  title: article.title,
  to: `/blog/articles/${article.slug}`,
  date: article.date,
  text: article.text,
  html: markdown.render(article.text || ''),
  viewed: article.viewed,
  categories: article.categories,
  prevPost: article.prevPost ? `/blog/articles/${article.prevPost}` : null,
  nextPost: article.nextPost ? `/blog/articles/${article.nextPost}` : null,
} : null);

const articleApi = {
  getArticles: () => api.get('/blog/articles')
    .then(({ data }) => (data.articles ? data.articles.map(prepareArticle) : [])),
  getCategoryArticles: (categoryId) => api.get(`/blog/categories/${categoryId}/articles`)
    .then(({ data }) => (data.articles ? data.articles.map(prepareArticle) : [])),
  getArticle: (articleId) => api.get(`/blog/articles/${articleId}`)
    .then(({ data }) => prepareArticle(data.article)),
  getLatestArticle: () => api.get('/blog/articles/latest')
    .then(({ data }) => prepareArticle(data.article)),
  getArticleById: (articleId) => api.get(`/blog/articles/id/${articleId}`)
    .then(({ data }) => prepareArticle(data.article)),
  addArticle: (token, values) => api.post('/blog/articles', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setArticle: (token, articleId, values) => api.put(`/blog/articles/${articleId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteArticle: (token, articleId) => api.delete(`/blog/articles/${articleId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};

export default articleApi;
