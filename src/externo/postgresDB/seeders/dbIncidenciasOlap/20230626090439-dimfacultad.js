'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'dimfacultad',
      [
        {
          idFacultad: 1,
          nombreFacultad: 'Ciencias de la Computación y Telecomunicaciones',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idFacultad: 2,
          nombreFacultad: 'Ciencias Exactas y Tecnología',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idFacultad: 3,
          nombreFacultad: 'Ciencias Médicas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
