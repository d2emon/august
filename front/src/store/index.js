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
    serviceLinks: {
      link1: {
        title: 'Дизайн',
        to: '/services',
      },
      link2: {
        title: 'SEO',
        to: '/services',
      },
      link3: {
        title: 'Копирайтинг',
        to: '/services',
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
  },
  actions: {
  },
  modules: {
  },
});
