module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aee33b10c97cb79e2f1b36eeea747814'),
  },
});
