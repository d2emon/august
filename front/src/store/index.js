import Vue from 'vue';
import Vuex from 'vuex';
import api from '../helpers/api';
import config from '../helpers/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    author: config.author,
    title: config.title,
    navigation: config.navigation,

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
      .then((services) => commit('setServices', services)),
    fetchService: ({ commit }, serviceId) => api
      .getService(serviceId)
      .then((service) => commit('setService', service)),
    fetchLatestProjects: ({ commit }) => api
      .getLatestProjects()
      .then((projects) => commit('setLatestProjects', projects)),
    fetchSocials: ({ commit }) => api
      .getSocials()
      .then((socials) => commit('setSocials', socials)),
    fetchPages: ({ commit }) => api
      .getPages()
      .then((pages) => commit('setPages', pages)),
    fetchPage: ({ commit }, pageId) => api
      .getPage(pageId)
      .then((page) => commit('setPage', page)),
    fetchBlog: ({ commit }) => api
      .getBlog()
      .then((blog) => {
        commit('setArticle', blog.article);
        commit('setPopularArticles', blog.popular);
        commit('setRecentArticles', blog.recent);
        commit('setArticleCategories', blog.categories);
      }),
  },
  modules: {
  },
});
