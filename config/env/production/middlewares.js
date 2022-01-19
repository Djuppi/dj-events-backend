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
        enabled: false,
        headers: ['*'],
        origin: [
          "https://djuppidjevntsbackend.herokuapp.com/",
          "https://www.localhost:3000",
          "https://localhost:1337"
        ],
      },
    },
  };