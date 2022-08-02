const LocalStrategy = require('passport-local').Strategy;
const { userController, orgController } = require('../../controllers');
const bcrypt = require('bcrypt');

const {
   MESSAGES: {
    HTTP_ERROR_MESSAGES,
  },
} = require('../../constants');
const {comparePassword} = require('../../../utils/auth');


/**
 * @description Local strategy. Common to everyone using it.
 */
const strategy = new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
  try {
    const userExists = await userController.checkIfUserExists({
      email,
    });
    if (!userExists) return done(null, false);
    const user = await userController.getUserWithCredentials(userExists.id);
    const checkPassword = await user.comparePassword(password);
    if(!checkPassword){
      return done(null,false,{ msg : 'Password incorrect' })
    }
    return done(null,user)
    
  } catch (error) {
    return done(error);
  }
});

module.exports = strategy;
