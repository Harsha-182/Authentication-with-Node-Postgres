module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      org_id: {
        type: Sequelize.INTEGER,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};

