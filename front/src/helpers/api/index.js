import api from './api';
import pageApi from './page';
import serviceApi from './service';
import { prepareProject } from './project';

const prepareSocial = (social) => (social ? {
  id: social.id,
  title: social.title,
  href: social.href,
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
  getServices: serviceApi.getServices,
  getService: serviceApi.getService,
  getServiceById: serviceApi.getServiceById,
  addService: serviceApi.addService,
  setService: serviceApi.setService,
  deleteService: serviceApi.deleteService,

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

  getPages: pageApi.getPages,
  getPage: pageApi.getPage,
  getPageById: pageApi.getPageById,
  addPage: pageApi.addPage,
  setPage: pageApi.setPage,
  deletePage: pageApi.deletePage,

  /*
  getArticle: (articleId) => api.get(`/blog/${articleId}`)
    .then(({ data }) => preparePage(data.article)),
  */
  getBlog: () => api.get('/blog')
    .then(({ data }) => prepareBlog(data)),
};
