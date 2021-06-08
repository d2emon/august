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
    projects: [],
    project: null,
    socials: [],
    pages: [],
    page: null,

    articles: [],
    popularArticles: [],
    recentArticles: [],
    article: null,
    articleCategories: [],

    accessToken: null,
    refreshToken: null,
  },
  mutations: {
    setServices: (state, value) => Vue.set(state, 'services', value),
    setService: (state, value) => Vue.set(state, 'service', value),
    setProjects: (state, value) => Vue.set(state, 'projects', value),
    setProject: (state, value) => Vue.set(state, 'project', value),
    setSocials: (state, value) => Vue.set(state, 'socials', value),
    setPages: (state, value) => Vue.set(state, 'pages', value),
    setPage: (state, value) => Vue.set(state, 'page', value),
    setArticles: (state, value) => Vue.set(state, 'articles', value),
    setArticle: (state, value) => Vue.set(state, 'article', value),
    setPopularArticles: (state, value) => Vue.set(state, 'popularArticles', value),
    setRecentArticles: (state, value) => Vue.set(state, 'recentArticles', value),
    setArticleCategories: (state, value) => Vue.set(state, 'articleCategories', value),
    setAccessToken: (state, value) => Vue.set(state, 'accessToken', value),
    setRefreshToken: (state, value) => Vue.set(state, 'refreshToken', value),
  },
  actions: {
    fetchServices: ({ commit }) => api.getServices()
      .then((services) => commit('setServices', services)),
    fetchService: ({ commit }, slug) => api.getService(slug)
      .then((service) => commit('setService', service)),
    fetchServiceById: ({ commit }, id) => api.getServiceById(id)
      .then((service) => commit('setService', service)),
    addService: ({ state }, values) => api.addService(state.accessToken, values),
    updateService: ({ state }, { id, values }) => api.setService(state.accessToken, id, values),
    deleteService: ({ state }, id) => api.deleteService(state.accessToken, id),

    fetchProjects: ({ commit }) => api.getProjects()
      .then((projects) => commit('setProjects', projects)),
    fetchLatestProjects: ({ commit }) => api.getLatestProjects()
      .then((projects) => commit('setProjects', projects)),
    fetchServiceProjects: ({ commit }, serviceId) => api.getServiceProjects(serviceId)
      .then((projects) => commit('setProjects', projects)),
    fetchProject: ({ commit }, slug) => api.getProject(slug)
      .then((project) => commit('setProject', project)),
    fetchProjectById: ({ commit }, id) => api.getProjectById(id)
      .then((project) => commit('setProject', project)),
    addProject: ({ state }, values) => api.addProject(state.accessToken, values),
    updateProject: ({ state }, { id, values }) => api.setProject(state.accessToken, id, values),
    deleteProject: ({ state }, id) => api.deleteProject(state.accessToken, id),

    fetchSocials: ({ commit }) => api.getSocials()
      .then((socials) => commit('setSocials', socials)),
    addSocial: ({ state }, values) => api.addSocial(state.accessToken, values),
    updateSocial: ({ state }, { id, values }) => api.setSocial(state.accessToken, id, values),
    deleteSocial: ({ state }, id) => api.deleteSocial(state.accessToken, id),

    fetchPages: ({ commit }) => api.getPages()
      .then((pages) => commit('setPages', pages)),
    fetchPage: ({ commit }, slug) => api.getPage(slug)
      .then((page) => commit('setPage', page)),
    fetchPageById: ({ commit }, pageId) => api.getPageById(pageId)
      .then((page) => commit('setPage', page)),
    addPage: ({ state }, values) => api.addPage(state.accessToken, values),
    updatePage: ({ state }, { id, values }) => api.setPage(state.accessToken, id, values),
    deletePage: ({ state }, id) => api.deletePage(state.accessToken, id),

    fetchCategories: ({ commit }) => api.getCategories()
      .then((categories) => commit('setArticleCategories', categories)),
    addCategory: ({ state }, values) => api.addCategory(state.accessToken, values),
    updateCategory: ({ state }, { id, values }) => api.setCategory(state.accessToken, id, values),
    deleteCategory: ({ state }, id) => api.deleteCategory(state.accessToken, id),

    fetchArticles: ({ commit }) => api.getArticles()
      .then((articles) => commit('setArticles', articles)),
    fetchCategoryArticles: ({ commit }, id) => api.getCategoryArticles(id)
      .then((articles) => commit('setArticles', articles)),
    fetchArticle: ({ commit }, slug) => api.getArticle(slug)
      .then((article) => commit('setArticle', article)),
    fetchArticleById: ({ commit }, pageId) => api.getArticleById(pageId)
      .then((article) => commit('setArticle', article)),
    fetchLatestArticle: ({ commit }) => api.getLatestArticle()
      .then((article) => commit('setArticle', article)),
    addArticle: ({ state }, values) => api.addArticle(state.accessToken, values),
    updateArticle: ({ state }, { id, values }) => api.setArticle(state.accessToken, id, values),
    deleteArticle: ({ state }, id) => api.deleteArticle(state.accessToken, id),

    fetchBlog: ({ commit }) => api
      .getBlog()
      .then((blog) => {
        commit('setPopularArticles', blog.popular);
        commit('setRecentArticles', blog.recent);
        commit('setArticleCategories', blog.categories);
      }),

    getToken: ({ commit }, {
      username,
      password,
    }) => api
      .getToken(
        username,
        password,
      )
      .then((data) => {
        if (data) {
          commit('setAccessToken', data.access_token);
          commit('setRefreshToken', data.refresh_token);
          return true;
        }
        commit('setAccessToken', null);
        commit('setRefreshToken', null);
        return false;
      }),
    checkToken: ({ commit, state }) => api.checkUser(state.accessToken)
      .then((result) => {
        if (!result) {
          commit('setAccessToken', null);
          commit('setRefreshToken', null);
        }
        return result;
      }),
  },
  modules: {
  },
});
