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
    serviceLinks: [],
    services: {
      link1: {
        title: 'Дизайн Логотипа',
        img: '/images/logo-design.jpg',
        text: `
          <p>
            This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text.
          </p>
          <p>
            You can remove any link to our website from this website template, you're free to use this
            website template without linking back to us.
          </p>
          <p>
            If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
          </p>
        `,
      },
      link2: {
        title: 'Web Дизайн',
        img: '/images/web-design.jpg',
        text: `
        <p>
          Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms">Terms of Use</a>. You can even remove all our links if you want to.
        </p>
        `,
      },
      link3: {
        title: 'Дизайн Для Печати',
        img: '/images/print-design.jpg',
        text: `
          <p>
            Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
          </p>
          <p>
            If you're experiencing issues and concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
          </p>
        `,
      },
    },
    latestProjects: {
      template1: {
        to: '/services',
        img: '/images/template1.jpg',
        title: 'Web Design',
        client: 'Frosty Sweets',
      },
      template2: {
        to: '/services',
        img: '/images/template2.jpg',
        title: 'Corporate Identity',
        client: 'Puppy Love',
      },
      template3: {
        to: '/services',
        img: '/images/template3.jpg',
        title: 'Advertising Campaign',
        client: 'Baby School',
      },
    },
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
    pages: {
      about: `
    <h2>About</h2>
    <img src="/images/paper-wheel.jpg" alt="">
    <h4><span>We Have Free Templates for Everyone</span></h4>
    <p>
      Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms">Terms of Use</a>. You can even remove all our links if you want to.
    </p>
    <h4><span>We Have More Templates for You</span></h4>
    <p>
      Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
    </p>
    <h4><span>Be Part of Our Community</span></h4>
    <p>
      If you're experiencing issues and concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
    </p>
    <h4><span>Template details</span></h4>
    <p>
      Design version 6 <br> Code version 3 <br><br> Website Template details, discussion and updates for this <a href="http://www.freewebsitetemplates.com/discuss/finemindsmarketingwebtemplate/">Fineminds Marketing Web Template</a>. <br><br> Website Template design by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a>. <br><br> <span style="font-size:11px;">Please feel free to remove some or all the text and links of this page and replace it with your own About content.</span>
    </p>
      `,
    },
  },
  mutations: {
    setServiceLinks: (state, value) => Vue.set(state, 'serviceLinks', value),
    setLatestProjects: (state, value) => Vue.set(state, 'latestProjects', value),
  },
  actions: {
    fetchServiceLinks: ({ commit }) => api
      .getServices()
      .then((services) => services.map((service) => ({
        id: service.id,
        title: service.title,
        to: `/services/${service.id}`,
        image: service.image,
      })))
      .then((services) => commit('setServiceLinks', services)),
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
  },
  modules: {
  },
});
