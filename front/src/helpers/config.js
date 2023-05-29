const config = {
  apiUrl: 'http://127.0.0.1:4000/api/v1.0/',
  author: 'Грекова Т. В., 2023',
  title: 'Рекламное агентство "Август"',
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
      title: 'Блог',
      to: '/blog',
    },
  ],
  defaultPage: 'index',
  defaultAboutPage: 'about',
  auth: {
    username: 'augustClient',
    password: 'thereisnospoon',
  },
};

export default config;
