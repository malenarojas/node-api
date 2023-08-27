'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CATEGORIA_INCIDENCIA',
      [
        {
          nombre: 'Normal',
          descripcion: 'Para el estamento universitario.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Foráneo',
          descripcion:
            'Para los que no pertenecen al estamento universitario, ej. vendedores ambulantes, gente ajena a la u.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'CATEGORIA_DENUNCIA',
      [
        {
          nombre: 'Normal',
          descripcion: 'Denuncia por parte del estamento.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Emergencia',
          descripcion:
            'Cuando el botón de Emergencia es presionado por el estamento.',
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
