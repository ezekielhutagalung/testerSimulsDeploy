'use strict';

const { hashPassword } = require('../helpers/bcyrpt');



module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users',
   [
    {
      email:'email@email.com',
      password : hashPassword('taikambing') ,
      createdAt: new Date(),
      updatedAt: new Date()
    }

   ],
   {}
   
   );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Users',null,{})
  }
};
