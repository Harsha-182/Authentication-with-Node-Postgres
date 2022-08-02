const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Organization extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate({ User, SsoOrgConfig }) {
        Organization.hasMany(User, { sourceKey: 'id', foreignKey: 'org_id',as:"users" });
      }
    }
    Organization.init({
      name: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
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
  