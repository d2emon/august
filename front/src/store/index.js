import Vue from 'vue';
import Vuex from 'vuex';

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
    social: {
      facebook: {
        title: 'facebook',
        href: 'http://freewebsitetemplates.com/go/facebook/',
      },
      twitter: {
        title: 'twitter',
        href: 'http://freewebsitetemplates.com/go/twitter/',
      },
      googleplus: {
        title: 'youtube',
        href: 'http://freewebsitetemplates.com/go/youtube/',
      },
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
