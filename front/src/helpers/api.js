export default {
  getServices: () => Promise.resolve([
    {
      id: 'link1',
      title: 'Дизайн',
      image: '/images/services/design.jpg',
    },
    {
      id: 'link2',
      title: 'SEO',
      image: '/images/services/seo.jpg',
    },
    {
      id: 'link3',
      title: 'Копирайтинг',
      image: '/images/services/design.jpg',
    },
  ]),
  getLatestProjects: () => Promise.resolve([
    {
      id: 'template1',
      title: 'Web Design',
      client: 'Frosty Sweets',
      image: '/images/template1.jpg',
    },
    {
      id: 'template2',
      title: 'Corporate Identity',
      client: 'Puppy Love',
      image: '/images/template2.jpg',
    },
    {
      id: 'template3',
      title: 'Advertising Campaign',
      client: 'Baby School',
      image: '/images/template3.jpg',
    },
  ]),
};
