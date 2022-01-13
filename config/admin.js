module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a5ea4cb9bc396a375ee187fa7660a69'),
  },
});
