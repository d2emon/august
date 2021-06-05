import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
});

const prepareProject = (project) => (project ? {
  id: project.id,
  title: project.title,
  client: project.client,
  to: `/project/${project.id}`,
  image: project.image,
} : null);
const prepareService = (service) => (service ? {
  id: service.id,
  title: service.title,
  text: service.text,
  to: `/services/${service.id}`,
  toPortfolio: `/portfolio/service/${service.id}`,
  image: service.image,
  projects: service.projects ? service.projects.map(prepareProject) : [],
} : null);
const prepareSocial = (social) => (social ? {
  id: social.id,
  title: social.title,
  href: social.href,
} : null);
const preparePage = (page) => (page ? {
  id: page.id,
  slug: page.slug,
  title: page.title,
  to: `/pages/${page.slug}`,
  text: page.text,
} : null);
const prepareBlog = (data) => {
  const {
    article,
    popular,
    recent,
    categories,
  } = data;
  return {
    article: article ? {
      id: article.id,
      title: article.title,
      published: article.published,
      categories: article.categories.map((category) => ({
        id: category.id,
        title: category.title,
        to: `/blog/category/${category.id}`,
      })),
      to: `/blog/article/${article.id}`,
      toComments: `/blog/article/${article.id}/comments`,
      prevPost: article.prevPost,
      nextPost: article.nextPost,
      text: article.text,
      comments: article.comments,
    } : null,
    popular: popular ? popular.map((a) => ({
      id: a.id,
      title: a.title,
      published: a.published,
      to: `/blog/article/${a.id}`,
    })) : [],
    recent: recent ? recent.map((a) => ({
      id: a.id,
      title: a.title,
      published: a.published,
      to: `/blog/article/${a.id}`,
    })) : [],
    categories: categories ? categories.map((category) => ({
      id: category.id,
      title: category.title,
      to: `/blog/category/${category.id}`,
    })) : [],
  };
};

export default {
  getServices: () => api.get('/service')
    .then(({ data }) => {
      const {
        services,
      } = data;
      return services ? services.map(prepareService) : [];
    }),
  getService: (serviceId) => api.get(`/service/${serviceId}`)
    .then(({ data }) => prepareService(data.service)),
  getLatestProjects: () => api.get('/project/latest')
    .then(({ data }) => {
      const {
        projects,
      } = data;
      return projects ? projects.map(prepareProject) : [];
    }),
  getSocials: () => api.get('/social')
    .then(({ data }) => {
      const {
        socials,
      } = data;
      return socials ? socials.map(prepareSocial) : [];
    }),

  getPages: () => api.get('/page')
    .then(({ data }) => {
      const {
        pages,
      } = data;
      return pages ? pages.map(preparePage) : [];
    }),
  getPage: (pageId) => api.get(`/page/${pageId}`)
    .then(({ data }) => preparePage(data.page)),
  getPageById: (pageId) => api.get(`/page/id/${pageId}`)
    .then(({ data }) => preparePage(data.page)),
  addPage: (values) => api.post('/page', values),
  setPage: (pageId, values) => api.put(`/page/${pageId}`, values),
  deletePage: (pageId) => api.delete(`/page/${pageId}`),

  getArticle: (articleId) => api.get(`/blog/${articleId}`)
    .then(({ data }) => preparePage(data.article)),
  getBlog: () => api.get('/blog')
    .then(({ data }) => prepareBlog(data)),
};
