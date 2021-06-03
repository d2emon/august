import Vue from 'vue';
import Vuex from 'vuex';
import api from '../helpers/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    author: 'Грекова Т. В., 2021',
    title: 'Рекламное агентство "Август"',
    navigation: [
      {
        title: 'Главная',
        to: '/index',
      },
      {
        title: 'О нас',
        to: '/about',
      },
      {
        title: 'Услуги',
        to: '/services',
      },
      {
        title: 'Портфолио',
        to: '/portfolio',
      },
      {
        title: 'Блог',
        to: '/blog',
      },
    ],
    services: [],
    service: null,
    latestProjects: [],
    socials: [],
    pages: [],
    page: null,
    article: null,
    popularArticles: [],
    recentArticles: [],
    articleCategories: [],
  },
  mutations: {
    setServices: (state, value) => Vue.set(state, 'services', value),
    setService: (state, value) => Vue.set(state, 'service', value),
    setLatestProjects: (state, value) => Vue.set(state, 'latestProjects', value),
    setSocials: (state, value) => Vue.set(state, 'socials', value),
    setPages: (state, value) => Vue.set(state, 'pages', value),
    setPage: (state, value) => Vue.set(state, 'page', value),
    setArticle: (state, value) => Vue.set(state, 'article', value),
    setPopularArticles: (state, value) => Vue.set(state, 'popularArticles', value),
    setRecentArticles: (state, value) => Vue.set(state, 'recentArticles', value),
    setArticleCategories: (state, value) => Vue.set(state, 'articleCategories', value),
  },
  actions: {
    fetchServices: ({ commit }) => api
      .getServices()
      .then((services) => services.map((service) => ({
        id: service.id,
        title: service.title,
        to: `/services/${service.id}`,
        toPortfolio: `/portfolio/service/${service.id}`,
        image: service.image,
      })))
      .then((services) => commit('setServices', services)),
    fetchService: ({ commit }, serviceId) => api
      .getService(serviceId)
      .then((service) => commit('setService', service && {
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
      })),
    fetchLatestProjects: ({ commit }) => api
      .getLatestProjects()
      .then((projects) => projects.map((project) => ({
        id: project.id,
        title: project.title,
        client: project.client,
        to: `/project/${project.id}`,
        image: project.image,
      })))
      .then((projects) => commit('setLatestProjects', projects)),
    fetchSocials: ({ commit }) => api
      .getSocials()
      .then((socials) => socials.map((social) => ({
        id: social.id,
        title: social.title,
        href: social.href,
      })))
      .then((socials) => commit('setSocials', socials)),
    fetchPages: ({ commit }) => api
      .getPages()
      .then((pages) => pages.map((page) => ({
        id: page.id,
        title: page.title,
        to: `/pages/${page.id}`,
        image: page.image,
      })))
      .then((pages) => commit('setPages', pages)),
    fetchPage: ({ commit }, pageId) => api
      .getPage(pageId)
      .then((page) => ({
        id: page.id,
        text: page.text,
      }))
      .then((page) => commit('setPage', page)),
    fetchBlog: ({ commit }) => api
      .getBlog()
      .then((blog) => {
        const {
          article,
          popular,
          recent,
          categories,
        } = blog;
        commit('setArticle', {
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
        });
        commit('setPopularArticles', popular.map((a) => ({
          id: a.id,
          title: a.title,
          published: a.published,
          to: `/blog/article/${a.id}`,
        })));
        commit('setRecentArticles', recent.map((a) => ({
          id: a.id,
          title: a.title,
          published: a.published,
          to: `/blog/article/${a.id}`,
        })));
        commit('setArticleCategories', categories.map((category) => ({
          id: category.id,
          title: category.title,
          to: `/blog/category/${category.id}`,
        })));
      }),
  },
  modules: {
  },
});
