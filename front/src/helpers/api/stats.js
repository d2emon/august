import api from './api';

const prepareStats = (stats) => (stats ? {
  page: stats.page,
  userAgent: stats.userAgent,
  referrer: stats.referrer,
  isMobile: stats.isMobile,
  platform: stats.platform,
} : null);

const statsApi = {
  getStats: (token, params) => api.get('/stats', {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => (data.stats ? prepareStats(data.stats) : null)),
  addStats: (url) => api.post('/stats', {
    referrer: document.referrer,
    height: window.innerHeight,
    width: window.innerWidth,
    page: url,
  }),
};

export default statsApi;
