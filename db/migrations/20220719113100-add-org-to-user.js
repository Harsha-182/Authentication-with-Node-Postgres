module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.addColumn('users', 'org_id', {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'organizations',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }),
  down: async (queryInterface) => queryInterface.removeColumn('users', 'org_id'),
};
