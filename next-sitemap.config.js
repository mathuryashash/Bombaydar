/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bomdaymaroc.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/', '/static/', '/private/'] },
    ],
    additionalSitemaps: ['https://bomdaymaroc.com/sitemap.xml'],
  },
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/about': 0.8,
      '/locations/gueliz': 0.9,
      '/locations/medina': 0.9,
      '/locations/casablanca': 0.9,
    };
    const changefreqMap = {
      '/': 'weekly',
      '/about': 'monthly',
      '/locations/gueliz': 'weekly',
      '/locations/medina': 'weekly',
      '/locations/casablanca': 'weekly',
    };
    return {
      loc: path,
      changefreq: changefreqMap[path] || 'monthly',
      priority: priorityMap[path] || 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => [
    { loc: '/en', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/fr', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() },
    { loc: '/en/about', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/fr/about', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
    { loc: '/en/locations/gueliz', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/fr/locations/gueliz', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/en/locations/medina', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/fr/locations/medina', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/en/locations/casablanca', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
    { loc: '/fr/locations/casablanca', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
  ],
};