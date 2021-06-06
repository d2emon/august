import markdown from '@/helpers/markdown';
import api from './api';

const preparePage = (page) => (page ? {
  id: page.id,
  slug: page.slug,
  title: page.title,
  to: `/about/${page.slug}`,
  text: page.text,
  html: markdown.render(page.text || ''),
} : null);

export default {
  getPages: () => api.get('/page')
    .then(({ data }) => (data.pages ? data.pages.map(preparePage) : [])),
  getPage: (pageId) => api.get(`/page/${pageId}`)
    .then(({ data }) => preparePage(data.page)),
  getPageById: (pageId) => api.get(`/page/id/${pageId}`)
    .then(({ data }) => preparePage(data.page)),
  addPage: (values) => api.post('/page', values),
  setPage: (pageId, values) => api.put(`/page/${pageId}`, values),
  deletePage: (pageId) => api.delete(`/page/${pageId}`),
};
