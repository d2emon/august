import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin',
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
        path: 'article',
        name: 'AdminArticle',
        component: () => import('../admin/items/Articles.vue'),
      },
      {
        path: 'article/add',
        name: 'AdminArticleAdd',
        component: () => import('../admin/edit/EditArticle.vue'),
      },
      {
        path: 'article/:id',
        name: 'AdminArticleEdit',
        component: () => import('../admin/edit/EditArticle.vue'),
      },

      {
        path: 'category',
        name: 'AdminCategory',
        component: () => import('../admin/items/Categories.vue'),
      },
      {
        path: 'category/add',
        name: 'AdminCategoryAdd',
        component: () => import('../admin/edit/EditCategory.vue'),
      },
      {
        path: 'category/:id',
        name: 'AdminCategoryEdit',
        component: () => import('../admin/edit/EditCategory.vue'),
      },

      {
        path: 'project',
        name: 'AdminProjects',
        component: () => import('../admin/items/Projects.vue'),
      },
      {
        path: 'project/add',
        name: 'AdminProjectAdd',
        component: () => import('../admin/edit/EditProject.vue'),
      },
      {
        path: 'project/:id',
        name: 'AdminProjectEdit',
        component: () => import('../admin/edit/EditProject.vue'),
      },

      {
        path: 'service',
        name: 'AdminServices',
        component: () => import('../admin/items/Services.vue'),
      },
      {
        path: 'service/add',
        name: 'AdminServiceAdd',
        component: () => import('../admin/edit/EditService.vue'),
      },
      {
        path: 'service/:id',
        name: 'AdminServiceEdit',
        component: () => import('../admin/edit/EditService.vue'),
      },

      {
        path: 'social',
        name: 'AdminSocials',
        component: () => import('../admin/items/Socials.vue'),
      },
      {
        path: 'social/add',
        name: 'AdminSocialAdd',
        component: () => import('../admin/edit/EditSocial.vue'),
      },
      {
        path: 'social/:id',
        name: 'AdminSocialEdit',
        component: () => import('../admin/edit/EditSocial.vue'),
      },

      {
        path: 'user',
        name: 'AdminUsers',
        component: () => import('../admin/items/Users.vue'),
      },
      {
        path: 'user/add',
        name: 'AdminUserAdd',
        component: () => import('../admin/edit/EditUser.vue'),
      },
      {
        path: 'user/:id',
        name: 'AdminUserEdit',
        component: () => import('../admin/edit/EditUser.vue'),
      },

      {
        path: 'wiki',
        name: 'AdminWiki',
        component: () => import('../admin/items/WikiPages.vue'),
      },
      {
        path: 'wiki/add',
        name: 'AdminWikiAdd',
        component: () => import('../admin/edit/EditWikiPage.vue'),
      },
      {
        path: 'wiki/:id',
        name: 'AdminWikiEdit',
        component: () => import('../admin/edit/EditWikiPage.vue'),
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
        component: () => import('../views/About.vue'),
        children: [
          {
            path: '',
            name: 'PageList',
          },
          {
            path: ':id',
            name: 'Page',
          },
        ],
      },
      {
        path: '/services',
        component: () => import('../views/Services.vue'),
        children: [
          {
            path: '',
            name: 'ServicesList',
          },
          {
            path: ':service',
            name: 'Service',
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
        path: '/project/:id',
        name: 'Project',
        component: () => import('../views/Project.vue'),
      },
      {
        path: '/blog',
        component: () => import('../views/Blog.vue'),
        children: [
          {
            path: '',
            name: 'LatestArticle',
          },
          {
            path: 'articles/:id',
            name: 'Article',
          },
        ],
      },
      {
        path: '/blog/categories/:id',
        name: 'BlogCategories',
        component: () => import('../views/BlogCategories.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
