import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
    children: [
      {
        path: '',
        name: 'ServicesList',
        component: () => import('../views/Services.vue'),
      },
      {
        path: ':service',
        name: 'Service',
        component: () => import('../views/Services.vue'),
      },
    ],
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    children: [
      {
        path: 'service/:service',
        name: 'PortfolioItems',
      },
    ],
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
