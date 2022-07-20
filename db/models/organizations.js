// const {DataTypes}=require('sequelize')
// const {
//     Model,
//   } = require('sequelize');
//    const User=require('./users.js')
//   module.exports = (sequelize, DataTypes) => {
//     class Role extends Model {
     
//       static associate({ User }) {
//         Role.belongsTo(User,{
//             foreignKey:'user_id',
//             as:'users'
//           })
//       }
//     }
//     Role.init({
//         id: 
//             {
//              allowNull: false,
//              primaryKey: true,
//              type: DataTypes.INTEGER,
//             },
//         name: 
//             {
//              type: DataTypes.STRING,
//              unique: false,
//              allowNull: false
//             },
//         userId:
//             {
//                 type:DataTypes.INTEGER
//             }
//             }
//     , {
//       sequelize,
//       modelName: 'Role',
//     });
//     return Role;
//   };

// const { DataTypes} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     const model = sequelize.define('Role',
//         {
//             id: {
//                 allowNull: false,
//                 primaryKey: true,
//                 type: DataTypes.INTEGER,
//                 },
//             name: {
//                 type: DataTypes.STRING,
//                 unique: false,
//                 allowNull: false
//             }
//         }
//     );

//     // model.associate = models => {
//     //     model.belongsToMany(models.User, {
//     //         hooks: true,
//     //         through: 'user_roles'
//     //     });
//     // };

//     return model;
// };


// const {
//     Model,
//   } = require('sequelize');

//   const {DataTypes}=require ('sequelize')
  
//   module.exports = (sequelize, DataTypes) => {
//     class Role extends Model {
//       /**
//        * Helper method for defining associations.
//        * This method is not a part of Sequelize lifecycle.
//        * The `models/index` file will call this method automatically.
//        */
//       static associate({ User }) {
//         Role.hasMany(User);
//       }
//     }
//     Role.init(
//         {
//             id: 
//         {
//          allowNull: false,
//          primaryKey: true,
//          type: DataTypes.INTEGER,
//         },
//     name: 
//         {
//          type: DataTypes.STRING,
//          unique: false,
//          allowNull: false
//         },
//     }, {
//       sequelize,
//       modelName: 'Role',
//     });
//     return Role;
//   };
  


// const {
//     Model,
//   } = require('sequelize');
// //   const { ALLOWED_INVALID_LOGIN_ATTEMPTS } = require('../../api/constants');
  
//   module.exports = (sequelize, DataTypes) => {
//     class Roles extends Model {
//       /**
//        * Helper method for defining associations.
//        * This method is not a part of Sequelize lifecycle.
//        * The `models/index` file will call this method automatically.
//        */
//       static associate({ User }) {
//         Roles.hasMany(User, { sourceKey: 'id', foreignKey: 'roles_id' });
//         // Organization.hasOne(SsoOrgConfig);
//       }
//     }
//     Organization.init({
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       color_scheme: {
//         type: DataTypes.STRING,
//         defaultValue: 'default',
//       },
//       logo_url: {
//         type: DataTypes.STRING,
//       },
//       subdomain: {
//         type: DataTypes.STRING,
//         unique: true,
//       },
//       allowed_invalid_login_attempts: {
//         type: DataTypes.INTEGER,
//         defaultValue: ALLOWED_INVALID_LOGIN_ATTEMPTS,
//       },
//       deployed: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//     }, {
//       sequelize,
//       modelName: 'Role',
//       underscored: true,
//     });
  
//     return Organization;
//   };
  


const {
    Model,
  } = require('sequelize');
//   const { ALLOWED_INVALID_LOGIN_ATTEMPTS } = require('../../api/constants');
  
  module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate({ User, SsoOrgConfig }) {
        Organization.hasMany(User, { sourceKey: 'id', foreignKey: 'org_id' });
        // Organization.hasOne(SsoOrgConfig);
      }
    }
    Organization.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.STRING,
        primaryKey:true,
        autoIncrement:true
      },
    
    }, {
      sequelize,
      modelName: 'Organization',
      underscored: true,
    });
  
    return Organization;
  };
  