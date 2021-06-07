import markdown from '@/helpers/markdown';
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
  prevPost: article.prevPost,
  nextPost: article.nextPost,
} : null);

export default {
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
  addArticle: (values) => api.post('/blog/articles', values),
  setArticle: (articleId, values) => api.put(`/blog/articles/${articleId}`, values),
  deleteArticle: (articleId) => api.delete(`/blog/articles/${articleId}`),
};
