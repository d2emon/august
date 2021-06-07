import api from './api';

export const prepareCategory = (category) => (category ? {
  id: category.id,
  slug: category.slug,
  title: category.title,
  to: `/blog/categories/${category.slug}`,
} : null);

export default {
  getCategories: () => api.get('/blog/categories')
    .then(({ data }) => (data.categories ? data.categories.map(prepareCategory) : [])),
  getCategory: (categoryId) => api.get(`/blog/categories/${categoryId}`)
    .then(({ data }) => prepareCategory(data.category)),
  addCategory: (values) => api.post('/blog/categories', values),
  setCategory: (categoryId, values) => api.put(`/blog/categories/${categoryId}`, values),
  deleteCategory: (categoryId) => api.delete(`/blog/categories/${categoryId}`),
};
