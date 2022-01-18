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
          "http://www.djuppidjevntsbackend.herokuapp.com",
        ],
      },
    },
  };