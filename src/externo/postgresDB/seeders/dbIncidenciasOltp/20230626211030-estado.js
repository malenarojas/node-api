'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ESTADO',
      [
        {
          nombre: 'Creado',
          descripcion: 'Estado creado',          
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Cancelado',
          descripcion: 'Estado cancelado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Sanción asignada',
          descripcion: 'Estado con sanción asignada',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Completado',
          descripcion: 'Estado completado',
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
