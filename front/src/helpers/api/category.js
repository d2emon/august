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
  addCategory: (token, values) => api.post('/blog/categories', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setCategory: (token, categoryId, values) => api.put(`/blog/categories/${categoryId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteCategory: (token, categoryId) => api.delete(`/blog/categories/${categoryId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};
