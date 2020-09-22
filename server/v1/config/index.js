module.exports = {
  isProduction : process.env.NODE_ENV == 'production',
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  sessionTimeout : process.env.SESSION_TIMEOUT ? parseInt(process.env.SESSION_TIMEOUT) : 1000 * 60 * 60 * 72,
  dbURI : process.env.MONGODB_URI,
  port : process.env.PORT
};
