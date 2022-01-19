module.exports = {
  settings: {
    cors: {
      enabled: true, 
      // headers: '*', 
      origin: ["http://localhost:1337", "https://djuppidjevntsbackend.herokuapp.com"],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
    },
  },
}