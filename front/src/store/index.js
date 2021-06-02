import Vue from 'vue';
import Vuex from 'vuex';
import api from '../helpers/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    author: 'Грекова Т. В., 2021',
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
        title: 'Контакты',
        to: '/contacts',
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
    page: null,
  },
  mutations: {
    setServices: (state, value) => Vue.set(state, 'services', value),
    setService: (state, value) => Vue.set(state, 'service', value),
    setLatestProjects: (state, value) => Vue.set(state, 'latestProjects', value),
    setSocials: (state, value) => Vue.set(state, 'socials', value),
    setPage: (state, value) => Vue.set(state, 'page', value),
  },
  actions: {
    fetchServices: ({ commit }) => api
      .getServices()
      .then((services) => services.map((service) => ({
        id: service.id,
        title: service.title,
        to: `/services/${service.id}`,
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
        image: service.image,
      })),
    fetchLatestProjects: ({ commit }) => api
      .getLatestProjects()
      .then((projects) => projects.map((project) => ({
        id: project.id,
        title: project.title,
        client: project.client,
        to: `/services/${project.id}`,
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
    fetchPage: ({ commit }, pageId) => api
      .getPage(pageId)
      .then((page) => ({
        id: page.id,
        text: page.text,
      }))
      .then((page) => commit('setPage', page)),
  },
  modules: {
  },
});
