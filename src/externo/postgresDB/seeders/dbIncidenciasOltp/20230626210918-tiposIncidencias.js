'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'TIPO',
      [
        {
          descripcion: 'Robo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Violencia',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Acoso',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Estupefaciente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Bullyng',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Bebidas alcohólicas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Conducción Peligrosa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Parqueo Inapropiado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion: 'Actos Obscenos',
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
