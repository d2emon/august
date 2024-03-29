import markdown from '../markdown';
import api from './api';

const preparePage = (page) => (page ? {
  id: page.id,
  slug: page.slug,
  title: page.title,
  to: `/about/${page.slug}`,
  text: page.text,
  html: markdown.render(page.text || ''),
} : null);

const pageApi = {
  getPages: () => api.get('/page')
    .then(({ data }) => (data.pages ? data.pages.map(preparePage) : [])),
  getPage: (pageId) => api.get(`/page/${pageId}`)
    .then(({ data }) => preparePage(data.page)),
  getPageById: (pageId) => api.get(`/page/id/${pageId}`)
    .then(({ data }) => preparePage(data.page)),
  addPage: (token, values) => api.post('/page', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setPage: (token, pageId, values) => api.put(`/page/${pageId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deletePage: (token, pageId) => api.delete(`/page/${pageId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};

export default pageApi;
