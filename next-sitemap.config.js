/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bombaydar.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/', '/static/', '/private/'] },
    ],
    additionalSitemaps: ['https://www.bombaydar.com/sitemap-images.xml'],
  },
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/menu': 0.9,
      '/about': 0.8,
      '/catering': 0.8,
      '/ramadan': 0.8,
      '/locations': 0.8,
      '/locations/gueliz': 0.9,
      '/locations/medina': 0.9,
      '/locations/casablanca': 0.9,
      '/chef': 0.7,
      '/gallery': 0.6,
      '/blog': 0.7,
    };
    const changefreqMap = {
      '/': 'weekly',
      '/menu': 'weekly',
      '/ramadan': 'daily',
      '/locations/gueliz': 'weekly',
      '/locations/medina': 'weekly',
      '/locations/casablanca': 'weekly',
      '/blog': 'weekly',
    };
    return {
      loc: path,
      changefreq: changefreqMap[path] || 'monthly',
      priority: priorityMap[path] || 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
