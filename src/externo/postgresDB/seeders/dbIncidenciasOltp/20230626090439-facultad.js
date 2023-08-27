'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'FACULTAD',
      [
        {
          descripcion: 'Ciencias de la Computación y Telecomunicaciones',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Ciencias Exactas y Tecnología',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Ciencias Médicas',
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
