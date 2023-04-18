'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'cake1',
        description: 'abcd',
        price: 1000,
        categoryId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

