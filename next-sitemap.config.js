/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://yaumulmajid.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/api/*', '/404'], // Tambah 404 page
    changefreq: 'daily',
    generateIndexSitemap: false, // Tambah ini untuk menghindari index sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
    // Pemetaan prioritas yang lebih spesifik
    transform: async (config, path) => {
      const priority = {
        '/': 1.0,
        '/about': 0.8,
        '/articles': 0.9,
        '/projects': 0.8,
        '/uses': 0.7,
      }[path] || 0.5;
  
      const changefreq = {
        '/': 'daily',
        '/articles': 'weekly',
        '/projects': 'monthly',
        '/about': 'monthly',
        '/uses': 'monthly',
      }[path] || 'monthly';
  
      return {
        loc: path,
        changefreq,
        priority,
        lastmod: new Date().toISOString(),
      }
    },
  }