module.exports = {
    load: {
      before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
      order: [],
      after: ["parser", "router"],
    },
    settings: {
      timer: {
        enabled: true,
      },
      cors: {
        enabled: true,
        headers: '*',
        origin: [
          "https://www.localhost:3000",
        ],
      },
    },
    security: {
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
  };