module.exports = {
  settings: {
    cors: {
      enabled: true, 
      // headers: '*', 
      origin: ["http://localhost:1337", "https://djuppidjevntsbackend.herokuapp.com", "htts://djevents-ochre.app"],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
    },
  },
}