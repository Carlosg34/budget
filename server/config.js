module.exports = {
  // What port should the webserver listen on?
  PORT: 3001,

  BCRYPT_SALT_ROUNDS: 10,

  // JSON web token secret key
  JWT_SECRET: 'hard-to-guess-secret-key',

  JWT_EXPIRY: 60 * 60 * 24 * 7 // 7 days

}
