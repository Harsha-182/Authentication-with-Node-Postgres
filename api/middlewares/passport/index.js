const passport = require('passport');
const LocalStrategy = require('./passportLocal.js');

passport.use(LocalStrategy);

module.exports = {
  passport,
};
