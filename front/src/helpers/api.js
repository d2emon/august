import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
});

export default {
  getServices: () => api.get('/service')
    .then(({ data }) => {
      const {
        services,
      } = data;
      return services ? services.map((service) => ({
        id: service.id,
        title: service.title,
        to: `/services/${service.id}`,
        toPortfolio: `/portfolio/service/${service.id}`,
        image: service.image,
      })) : [];
    }),
  getService: (serviceId) => api.get(`/service/${serviceId}`)
    .then(({ data }) => {
      const {
        service,
      } = data;
      return service ? {
        id: service.id,
        title: service.title,
        text: service.text,
        to: `/services/${service.id}`,
        toPortfolio: `/portfolio/service/${service.id}`,
        image: service.image,
        projects: service.projects.map((project) => ({
          id: project.id,
          title: project.title,
          client: project.client,
          to: `/project/${project.id}`,
          image: project.image,
        })),
      } : null;
    }),
  getLatestProjects: () => api.get('/project/latest')
    .then(({ data }) => {
      const {
        projects,
      } = data;
      return projects ? projects.map((project) => ({
        id: project.id,
        title: project.title,
        client: project.client,
        to: `/project/${project.id}`,
        image: project.image,
      })) : [];
    }),
  getSocials: () => api.get('/social')
    .then(({ data }) => {
      const {
        socials,
      } = data;
      return socials ? socials.map((social) => ({
        id: social.id,
        title: social.title,
        href: social.href,
      })) : [];
    }),
  getPages: () => api.get('/page')
    .then(({ data }) => {
      const {
        pages,
      } = data;
      return pages ? pages.map((page) => ({
        id: page.id,
        title: page.title,
        to: `/pages/${page.id}`,
        image: page.image,
      })) : [];
    }),
  getPage: (pageId) => new Promise((resolve) => {
    const pages = {
      about: {
        id: 'about',
        text: `
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
    };
    return resolve(pages[pageId]);
  }),
  getArticle: (articleId) => new Promise((resolve) => {
    const articles = {
      'its-all-about-image': {
        id: 'its-all-about-image',
        text: `
    <img src="/images/blog/photo-shoot.jpg" alt="">
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
    };
    return resolve(articles[articleId]);
  }),
  getBlog: () => api.get('/blog')
    .then(({ data }) => {
      const {
        article,
        popular,
        recent,
        categories,
      } = data;
      return {
        article: article ? {
          id: article.id,
          title: article.title,
          published: article.published,
          categories: article.categories.map((category) => ({
            id: category.id,
            title: category.title,
            to: `/blog/category/${category.id}`,
          })),
          to: `/blog/article/${article.id}`,
          toComments: `/blog/article/${article.id}/comments`,
          prevPost: article.prevPost,
          nextPost: article.nextPost,
          text: article.text,
          comments: article.comments,
        } : null,
        popular: popular ? popular.map((a) => ({
          id: a.id,
          title: a.title,
          published: a.published,
          to: `/blog/article/${a.id}`,
        })) : [],
        recent: recent ? recent.map((a) => ({
          id: a.id,
          title: a.title,
          published: a.published,
          to: `/blog/article/${a.id}`,
        })) : [],
        categories: categories ? categories.map((category) => ({
          id: category.id,
          title: category.title,
          to: `/blog/category/${category.id}`,
        })) : [],
      };
    }),
};
