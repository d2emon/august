import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AdminContainer from '../admin/AdminContainer';
import AdminHome from '../admin/Home';
import August from '../views/August';
import Home from '../views/Home';
import SpinLogo from '../SpinLogo';
import Users from '../admin/Users';
import Articles from '../admin/Articles';
import Categories from '../admin/Categories';
import Services from '../admin/Services';
import Projects from '../admin/Projects';
import Socials from '../admin/Socials';
import Emails from '../admin/Emails';
import Wiki from '../admin/Wiki';
import About from '../views/About';
import AboutPage from '../views/AboutPage';
import api from '../helpers/api';
import StatPage from '../admin/stats/StatPage';

const sendStats = async (url) => {
  try {
    await api.addStats(url);
  } catch (error) {
    console.error(error);
  }
};

const statsLoader = ({ request }) => {
  sendStats(request.url);

  return null;
}

const routes = [
  {
    path: '/admin',
    element: <AdminContainer />,
    children: [
      {
        path: '',
        element: <Navigate to="/admin/home" />,
      },
      {
        path: 'home',
        element: <AdminHome />,
      },

      {
        path: 'article',
        element: <Articles />,
      },
      {
        path: 'article/add',
        element: <Articles.Edit />,
      },
      {
        path: 'article/:id',
        element: <Articles.Edit />,
      },

      {
        path: 'category',
        element: <Categories />,
      },
      {
        path: 'category/add',
        element: <Categories.Edit />,
      },
      {
        path: 'category/:id',
        element: <Categories.Edit />,
      },

      {
        path: 'project',
        element: <Projects />,
      },
      {
        path: 'project/add',
        element: <Projects.Edit />,
      },
      {
        path: 'project/:id',
        element: <Projects.Edit />,
      },

      {
        path: 'service',
        element: <Services />,
      },
      {
        path: 'service/add',
        element: <Services.Edit />,
      },
      {
        path: 'service/:id',
        element: <Services.Edit />,
      },

      {
        path: 'social',
        element: <Socials />,
      },
      {
        path: 'social/add',
        element: <Socials.Edit />,
      },
      {
        path: 'social/:id',
        element: <Socials.Edit />,
      },

      {
        path: 'user',
        element: <Users />,
      },
      {
        path: 'user/add',
        element: <Users.Edit />,
      },
      {
        path: 'user/:id',
        element: <Users.Edit />,
      },

      {
        path: 'wiki',
        element: <Wiki />,
      },
      {
        path: 'wiki/add',
        element: <Wiki.Edit />,
      },
      {
        path: 'wiki/:id',
        element: <Wiki.Edit />,
      },

      {
        path: 'email',
        element: <Emails />,
      },
      {
        path: 'email/add',
        element: <Emails.Edit />,
      },
      {
        path: 'email/:id',
        element: <Emails.Edit />,
      },

      {
        path: 'stats/week',
        element: <StatPage mode="week" />,
      },
      {
        path: 'stats/year',
        element: <StatPage mode="year" />,
      },
    ],
  },
  {
    path: '/',
    element: <August />,
    children: [
      {
        path: '/',
        element: <Navigate to="/index" />,
      },
      {
        path: '/index',
        element: <Home />,
        loader: statsLoader,
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: '',
            element: <AboutPage />,
            loader: statsLoader,
          },
          {
            path: ':pageId',
            element: <AboutPage />,
            loader: statsLoader,
          },
        ],
      },
      {
        path: '/services',
        element: <SpinLogo />,
        // component: () => import('../views/Services.vue'),
        children: [
          {
            path: '',
            loader: statsLoader,
            // name: 'ServicesList',
          },
          {
            path: ':service',
            loader: statsLoader,
            // name: 'Service',
          },
        ],
      },
      {
        path: '/portfolio',
        // name: 'Portfolio',
        element: <SpinLogo />,
        loader: statsLoader,
        // component: () => import('../views/Portfolio.vue'),
        children: [
          {
            path: 'service/:service',
            loader: statsLoader,
            // name: 'PortfolioItems',
          },
        ],
      },
      {
        path: '/project/:id',
        // name: 'Project',
        element: <SpinLogo />,
        loader: statsLoader,
        // component: () => import('../views/Project.vue'),
      },
      {
        path: '/blog',
        element: <SpinLogo />,
        // component: () => import('../views/Blog.vue'),
        children: [
          {
            path: '',
            loader: statsLoader,
            // name: 'LatestArticle',
          },
          {
            path: 'articles/:id',
            loader: statsLoader,
            // name: 'Article',
          },
        ],
      },
      {
        path: '/blog/categories/:id',
        // name: 'BlogCategories',
        element: <SpinLogo />,
        loader: statsLoader,
        // component: () => import('../views/BlogCategories.vue'),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
