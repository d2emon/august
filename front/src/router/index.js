import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../admin/AdminContainer.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/home',
      },
      {
        path: 'home',
        name: 'AdminHome',
        component: () => import('../admin/Home.vue'),
      },
      {
        path: 'users',
        name: 'AdminUsers',
        component: () => import('../admin/Home.vue'),
      },
      {
        path: 'contacts',
        name: 'AdminContacts',
        component: () => import('../admin/Home.vue'),
      },
      {
        path: 'projects',
        name: 'AdminProjects',
        component: () => import('../admin/Home.vue'),
      },
      {
        path: 'services',
        name: 'AdminServices',
        component: () => import('../admin/Home.vue'),
      },
      {
        path: 'wiki',
        name: 'AdminWiki',
        component: () => import('../admin/Home.vue'),
      },
      {
        path: 'blog',
        name: 'AdminBlog',
        component: () => import('../admin/Home.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('../views/August.vue'),
    children: [
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
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
