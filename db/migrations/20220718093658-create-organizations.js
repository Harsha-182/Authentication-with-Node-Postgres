module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('organizations', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
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
    await queryInterface.dropTable('organizations');
  },
};

