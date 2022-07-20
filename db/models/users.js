// // const{
// //     Model,
// // }=require('sequelize');
// // const Role=require('./roles.js')
// // const {DataTypes}=require('sequelize')

// // module.exports=(sequelize,Datatypes)=>{
// //     class User extends Model{
// //         static associate({Credential,Organization,Role}){
// //             User.belongsTo(Role);
          
// //         }
// //     }
// //     User.init({
// //         name:{
// //             type:DataTypes.STRING,
// //             allowNull:false
// //         },
// //         email:{
// //             type:DataTypes.STRING,
// //             allowNull:false
// //         },
// //         password: {
// //             type: DataTypes.STRING,
// //             length: 60,
// //             allowNull: false
// //             }
        
        

// //     },{
// //         sequelize,
// //         modelName:'User',
// //         underscored:true,
// //     }
// //     );

// //     return User;
// // }

// // const { DataTypes} = require('sequelize') ;
// // module.exports = (sequelize, DataTypes) => 
// // {
// //     const model = sequelize.define('User', {
// //         name:{
// //             type:DataTypes.STRING,
// //             allowNull:false
// //             },
// //         email: {
// //             type: DataTypes.STRING,
// //             unique: true,
// //             allowNull: false
// //         },
// //         password: {
// //             type: DataTypes.STRING,
// //             length: 60,
// //             allowNull: false
// //         }
// //     })
    

// //     // model.associate = models => {
// //     //     model.belongsToMany(models.Role, {
// //     //         hooks: true,
// //     //         through: 'user_roles'
// //     //     })
// //     // };

// //     return model;
// // }



// const {
//     Model,
//   } = require('sequelize');
// //   const {
// //     authUtils: {
// //       generateJWT,
// //     },
// //     mailUtils,
// //   } = require('../../utils');
// //   const { PASSWORD_RESET_MAIL } = require('../../api/constants/mail');
  
// //   module.exports = (sequelize, DataTypes) => {
// //     class User extends Model {
// //       static associate({ Credential, Organization, Role }) {
// //         // User.hasOne(Credential);
// //         // User.belongsTo(Organization, { foreignKey: 'org_id' });
// //         User.belongsTo(Role);
// //       }
// //     }
  
// //     User.init({
// //       name: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //       },
// //       email: {
// //         type: DataTypes.STRING,
// //         allowNull: false,
// //       },
// //       password: 
// //         {
// //         type: DataTypes.STRING,
// //         length: 60,
// //         allowNull: false
// //         },
// //     //   is_sso_user: {
// //     //     type: DataTypes.BOOLEAN,
// //     //     defaultValue: false,
// //     //   },
// //     //   is_locked: {
// //     //     type: DataTypes.BOOLEAN,
// //     //     defaultValue: false,
// //     //   },
// //     //   org_id: {
// //     //     type: DataTypes.UUID,
// //     //   },
// //       role_id: {
// //         type: DataTypes.INTEGER,
// //         },
// //     //   invalid_login_attempt_count: {
// //     //     type: DataTypes.INTEGER,
// //     //     defaultValue: 0,
// //     //   },
// //     }, {
// //       sequelize,
// //       modelName: 'User',
// //       underscored: true,
// //     });
  
// //     // User.prototype.getJwtToken = async function getToken() {
// //     //   return generateJWT({
// //     //     id: this.id,
// //     //   });
// //     // };
  
// //     // User.prototype.sendPasswordResetMail = async function sendPasswordResetMail() {
// //     //   const token = await this.getJwtToken();
// //     //   const toAddress = this.email;
// //     //   const subject = 'Password reset request.';
// //     //   const body = PASSWORD_RESET_MAIL(token);
// //     //   return mailUtils.send(toAddress, subject, body);
// //     // };
  
// //     return User;
// //   };


// //   module.exports = {
// //     up: async (queryInterface, Sequelize) => {
// //       await queryInterface.createTable('users', {
// //         id: {
// //           allowNull: false,
// //           primaryKey: true,
// //           type: Sequelize.UUID,
// //           defaultValue: Sequelize.literal('uuid_generate_v4()'),
// //         },
// //         name: {
// //           type: Sequelize.STRING,
// //         },
// //         username: {
// //           type: Sequelize.STRING,
// //         },
// //         email: {
// //           type: Sequelize.STRING,
// //           allowNull: false,
// //           unique: true,
// //         },
// //         is_sso_user: {
// //           type: Sequelize.BOOLEAN,
// //           default: false,
// //         },
// //         created_at: {
// //           allowNull: false,
// //           type: Sequelize.DATE,
// //         },
// //         updated_at: {
// //           allowNull: false,
// //           type: Sequelize.DATE,
// //         },
// //       });
// //     },
// //     down: async (queryInterface) => {
// //       await queryInterface.dropTable('users');
// //     },
// //   };
  


// const {
//     Model,
//   } = require('sequelize');
//   const {
//     authUtils: {
//       generateJWT,
//     },
//     mailUtils,
//   } = require('../../utils');
//   const { PASSWORD_RESET_MAIL } = require('../../api/constants/mail');
  
//   module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//       static associate({ Credential, Role }) {
//         // User.hasOne(Credential);
//         User.belongsTo(Role, { foreignKey: 'roles_id' });
//         // User.belongsTo(Role);
//       }
//     }
  
//     User.init({
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       is_sso_user: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//       is_locked: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//       org_id: {
//         type: DataTypes.UUID,
//       },
//       role_id: {
//         type: DataTypes.UUID,
//       },
//       invalid_login_attempt_count: {
//         type: DataTypes.INTEGER,
//         defaultValue: 0,
//       },
//     }, {
//       sequelize,
//       modelName: 'User',
//       underscored: true,
//     });
  
//     // User.prototype.getJwtToken = async function getToken() {
//     //   return generateJWT({
//     //     id: this.id,
//     //   });
//     // };
  
//     // User.prototype.sendPasswordResetMail = async function sendPasswordResetMail() {
//     //   const token = await this.getJwtToken();
//     //   const toAddress = this.email;
//     //   const subject = 'Password reset request.';
//     //   const body = PASSWORD_RESET_MAIL(token);
//     //   return mailUtils.send(toAddress, subject, body);
//     // };
  
//     return User;
//   };
const {
  Model,
} = require('sequelize');
// const {
//   authUtils: {
//     generateJWT,
//   },
//   mailUtils,
// } = require('../../utils');
// const { PASSWORD_RESET_MAIL } = require('../../api/constants/mail');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Credential, Organization, Role }) {
      // User.hasOne(Credential);
      User.belongsTo(Organization, { foreignKey: 'org_id' });
      // User.belongsTo(Role);
    }
  }

  User.init({
    id:{
      type:DataTypes.STRING,
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
    }
   
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });

  // User.prototype.getJwtToken = async function getToken() {
  //   return generateJWT({
  //     id: this.id,
  //   });
  // };

  // User.prototype.sendPasswordResetMail = async function sendPasswordResetMail() {
  //   const token = await this.getJwtToken();
  //   const toAddress = this.email;
  //   const subject = 'Password reset request.';
  //   const body = PASSWORD_RESET_MAIL(token);
  //   return mailUtils.send(toAddress, subject, body);
  // };

  return User;
};
