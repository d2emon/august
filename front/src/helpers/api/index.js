import API from './api';
import pageApi from './page';
import serviceApi from './service';
import projectApi from './project';
import socialApi from './social';
import categoryApi, { prepareCategory } from './category';
import articleApi, { prepareArticle } from './article';
import userApi from './user';
import emailApi from './email';
import authApi from './auth';

const prepareBlog = (data) => {
  const {
    popular,
    recent,
    categories,
  } = data;
  return {
    popular: popular ? popular.map(prepareArticle) : [],
    recent: recent ? recent.map(prepareArticle) : [],
    categories: categories ? categories.map(prepareCategory) : [],
  };
};

const api = {
  getServices: serviceApi.getServices,
  getService: serviceApi.getService,
  getServiceById: serviceApi.getServiceById,
  addService: serviceApi.addService,
  setService: serviceApi.setService,
  deleteService: serviceApi.deleteService,

  getProjects: projectApi.getProjects,
  getLatestProjects: projectApi.getLatestProjects,
  getServiceProjects: projectApi.getServiceProjects,
  getProject: projectApi.getProject,
  getProjectById: projectApi.getProjectById,
  addProject: projectApi.addProject,
  setProject: projectApi.setProject,
  deleteProject: projectApi.deleteProject,

  getSocials: socialApi.getSocials,
  getSocial: socialApi.getSocial,
  addSocial: socialApi.addSocial,
  setSocial: socialApi.setSocial,
  deleteSocial: socialApi.deleteSocial,

  getPages: pageApi.getPages,
  getPage: pageApi.getPage,
  getPageById: pageApi.getPageById,
  addPage: pageApi.addPage,
  setPage: pageApi.setPage,
  deletePage: pageApi.deletePage,

  getCategories: categoryApi.getCategories,
  getCategory: categoryApi.getCategory,
  addCategory: categoryApi.addCategory,
  setCategory: categoryApi.setCategory,
  deleteCategory: categoryApi.deleteCategory,

  getArticles: articleApi.getArticles,
  getCategoryArticles: articleApi.getCategoryArticles,
  getArticle: articleApi.getArticle,
  getArticleById: articleApi.getArticleById,
  getLatestArticle: articleApi.getLatestArticle,
  addArticle: articleApi.addArticle,
  setArticle: articleApi.setArticle,
  deleteArticle: articleApi.deleteArticle,

  getUsers: userApi.getUsers,
  getUser: userApi.getUserById,
  addUser: userApi.addUser,
  setUser: userApi.setUser,
  deleteUser: userApi.deleteUser,

  getEmails: emailApi.getEmails,
  getEmail: emailApi.getEmailById,
  addEmail: emailApi.addEmail,
  setEmail: emailApi.setEmail,
  deleteEmail: emailApi.deleteEmail,

  getBlog: () => API.get('/blog')
    .then(({ data }) => prepareBlog(data)),

  getToken: authApi.getToken,
  checkUser: authApi.checkUser,
};

export default api;
