'use strict';

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
     await queryInterface.bulkInsert('Photos',[
      {
        imageurl:'https://picsum.photos/200',
        UserId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageurl:'https://picsum.photos/300',
        UserId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

     ], {}
     )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Photos',null,{})
  }
};
