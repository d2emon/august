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

    article: null,
    popularArticles: [],
    recentArticles: [],
    articleCategories: [],
  },
  mutations: {
    setServices: (state, value) => Vue.set(state, 'services', value),
    setService: (state, value) => Vue.set(state, 'service', value),
    setProjects: (state, value) => Vue.set(state, 'projects', value),
    setProject: (state, value) => Vue.set(state, 'project', value),
    setSocials: (state, value) => Vue.set(state, 'socials', value),
    setPages: (state, value) => Vue.set(state, 'pages', value),
    setPage: (state, value) => Vue.set(state, 'page', value),
    setArticle: (state, value) => Vue.set(state, 'article', value),
    setPopularArticles: (state, value) => Vue.set(state, 'popularArticles', value),
    setRecentArticles: (state, value) => Vue.set(state, 'recentArticles', value),
    setArticleCategories: (state, value) => Vue.set(state, 'articleCategories', value),
  },
  actions: {
    fetchServices: ({ commit }) => api.getServices()
      .then((services) => commit('setServices', services)),
    fetchService: ({ commit }, slug) => api.getService(slug)
      .then((service) => commit('setService', service)),
    fetchServiceById: ({ commit }, id) => api.getServiceById(id)
      .then((service) => commit('setService', service)),
    addService: (context, values) => api.addService(values),
    updateService: (context, { id, values }) => api.setService(id, values),
    deleteService: (context, id) => api.deleteService(id),

    fetchProjects: ({ commit }) => api.getProjects()
      .then((projects) => commit('setProjects', projects)),
    fetchLatestProjects: ({ commit }) => api.getLatestProjects()
      .then((projects) => commit('setProjects', projects)),
    fetchProject: ({ commit }, slug) => api.getProject(slug)
      .then((project) => commit('setProject', project)),
    fetchProjectById: ({ commit }, id) => api.getProjectById(id)
      .then((project) => commit('setProject', project)),
    addProject: (context, values) => api.addProject(values),
    updateProject: (context, { id, values }) => api.setProject(id, values),
    deleteProject: (context, id) => api.deleteProject(id),

    fetchSocials: ({ commit }) => api.getSocials()
      .then((socials) => commit('setSocials', socials)),
    addSocial: (context, values) => api.addSocial(values),
    updateSocial: (context, { id, values }) => api.setSocial(id, values),
    deleteSocial: (context, id) => api.deleteSocial(id),

    fetchPages: ({ commit }) => api.getPages()
      .then((pages) => commit('setPages', pages)),
    fetchPage: ({ commit }, slug) => api.getPage(slug)
      .then((page) => commit('setPage', page)),
    fetchPageById: ({ commit }, pageId) => api.getPageById(pageId)
      .then((page) => commit('setPage', page)),
    addPage: (context, values) => api.addPage(values),
    updatePage: (context, { id, values }) => api.setPage(id, values),
    deletePage: (context, id) => api.deletePage(id),

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
