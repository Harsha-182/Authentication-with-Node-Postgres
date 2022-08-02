const {
  Model,
} = require('sequelize');

const {
  authUtils: {
    hashPassword,
    comparePassword,
  },
} = require('../../utils');
// const {authUtils:{
//   generateJWT,
// } }=require("../../utils");
const {
  authUtils: {
    generateJWT,
  },
  mailUtils,
} = require('../../utils');
const { PASSWORD_RESET_MAIL } = require('../../api/constants/mail.js');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Credential, Organization, Role }) {
      // User.hasOne(Credential);
      User.belongsTo(Organization, { foreignKey: 'org_id',as:"users" });
      // User.belongsTo(Role);
    }
  }

  User.init({
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    org_id: {
      type: DataTypes.INTEGER,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },

   
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });

  
  ;
  User.prototype.getJwtToken = async function getToken() {
    return generateJWT({
      id: this.id,
    });
  };

  User.prototype.sendPasswordResetMail = async function sendPasswordResetMail() {
    const token = await this.getJwtToken();
    const toAddress = this.email;
    const subject = 'Password reset request.';
    const body = PASSWORD_RESET_MAIL(token);
   
    return mailUtils.send(toAddress, subject, body);
  };

  User.beforeCreate(async (credentials) => {
    const updatedCredentiatls = credentials;
    const hashedPassword = await hashPassword(credentials.password);
    updatedCredentiatls.password = hashedPassword;
    return updatedCredentiatls;
  });

  User.beforeUpdate(async (credentials) => {
    const isPasswordUpdated = credentials.changed('password');
    if (isPasswordUpdated) {
      const updatedCredentiatls = credentials;
      const hash = await hashPassword(credentials.password);
      updatedCredentiatls.password = hash;
      return updatedCredentiatls;
    }
    return credentials;
  });


  User.prototype.comparePassword = async function checkPassword(password) {
    return comparePassword(
      password,
      this.password,
    );
  };

  
  return User;
};
