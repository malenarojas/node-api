'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'DENUNCIA',
      [
        {
          descripcion:
            'AL CAMINAR POR EL SECTOR DEL PARQUEO, EL JOVEN ASUSTÓ AL PERRO (TIRANO), EL CUAL LE LADRO Y EL UNIVERSITARIO PROCEDIO A PATEARLO ',
          telefonoContacto: 75369879,
          idTipo: 2,
          idEstamento: 3,
          idCategoriaDenuncia: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion:
            'SE ENCONTRO AL SUJETO EN EL TERCER PISO DEL MODULO DE PARQUEO VERTICAL, FUMANDO MARIHUANA (INFRAGANTI)',
          telefonoContacto: 71189356,
          idTipo: 4,
          idEstamento: 3,
          idCategoriaDenuncia: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion:
            'SE ENCONTRO A ESTUDIANTES CONSUMIENDO BEBIDAS ALCOHOLICAS DENTRO DE LAS INSTALACIONES DE LA FACULTAD DE ECONOMÍA',
          telefonoContacto: 69875984,
          idTipo: 6,
          idEstamento: 4,
          idCategoriaDenuncia: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descripcion:
            'DENUNCIA DEL ROBO DE UNA COMPUTADORA DENTRO DE LA FACULTAD DE TECNOLOGÍA',
          telefonoContacto: 72365984,
          idTipo: 1,
          idEstamento: 2,
          idCategoriaDenuncia: 1,
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
    await queryInterface.bulkDelete('DENUNCIA', null, {});
  },
};
