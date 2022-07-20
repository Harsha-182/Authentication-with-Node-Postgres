'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     //Add seed commands here.
     
     // Example:
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        username:"Harsha",
        email:"Harsha@gmail.com",
      },
     {
        name: 'Horner',
        username:"King",
        email:"Cel@gmail.com",
        // org_id:"b740fbf6-0760-11ed-b939-0242ac120002"
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
