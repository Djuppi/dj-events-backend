

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
  {
    settings: {
      cors: {
        enabled: true,
        origin: ['http://localhost', 'https://djuppidjevntsbackend.herokuapp.com', 'https://www.mysite.com'], // ['*'] to allow all origins
        headers: ['Content-Type', 'Authorization', 'X-Frame-Options', 'x-csrf-token'], // ['*'] to allow all headers
      },
    }
  }
];
