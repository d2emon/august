import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
});

export default {
  getServices: () => api.get('/service')
    .then(({ data }) => {
      const {
        services,
      } = data;
      return services ? services.map((service) => ({
        id: service.id,
        title: service.title,
        to: `/services/${service.id}`,
        toPortfolio: `/portfolio/service/${service.id}`,
        image: service.image,
      })) : [];
    }),
  getService: (serviceId) => api.get(`/service/${serviceId}`)
    .then(({ data }) => {
      const {
        service,
      } = data;
      return service ? {
        id: service.id,
        title: service.title,
        text: service.text,
        to: `/services/${service.id}`,
        toPortfolio: `/portfolio/service/${service.id}`,
        image: service.image,
        projects: service.projects.map((project) => ({
          id: project.id,
          title: project.title,
          client: project.client,
          to: `/project/${project.id}`,
          image: project.image,
        })),
      } : null;
    }),
  getLatestProjects: () => api.get('/project/latest')
    .then(({ data }) => {
      const {
        projects,
      } = data;
      return projects ? projects.map((project) => ({
        id: project.id,
        title: project.title,
        client: project.client,
        to: `/project/${project.id}`,
        image: project.image,
      })) : [];
    }),
  getSocials: () => api.get('/social')
    .then(({ data }) => {
      const {
        socials,
      } = data;
      return socials ? socials.map((social) => ({
        id: social.id,
        title: social.title,
        href: social.href,
      })) : [];
    }),
  getPages: () => api.get('/page')
    .then(({ data }) => {
      const {
        pages,
      } = data;
      return pages ? pages.map((page) => ({
        id: page.id,
        title: page.title,
        to: `/pages/${page.id}`,
        image: page.image,
      })) : [];
    }),
  getPage: (pageId) => api.get(`/page/${pageId}`)
    .then(({ data }) => {
      const {
        page,
      } = data;
      return page ? {
        id: page.id,
        text: page.text,
      } : null;
    }),
  getArticle: (articleId) => api.get(`/blog/${articleId}`)
    .then(({ data }) => {
      const {
        article,
      } = data;
      return article ? {
        id: article.id,
        text: article.text,
      } : null;
    }),
  getBlog: () => api.get('/blog')
    .then(({ data }) => {
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
    }),
};
