'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ZONA',
      [
        {
          nombre: 'Campus',
          descripcion: 'Este es el sector del Campus de la U.A.G.R.M.',
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: 'Módulos',
          descripcion: 'Este es el sector de los módulos de la U.A.G.R.M.',
          habilitado: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'COORDENADA',
      [
        {
          longitud: -63.1903121,
          latitud: -17.7790874,
          idZona: 1,
        },
        {
          longitud: -63.1907788,
          latitud: -17.7789955,
          idZona: 1,
        },
        {
          longitud: -63.190827,
          latitud: -17.7797936,
          idZona: 1,
        },
        {
          longitud: -63.1934341,
          latitud: -17.7792317,
          idZona: 1,
        },
        {
          longitud: -63.1921842,
          latitud: -17.7749765,
          idZona: 1,
        },
        {
          longitud: -63.1911006,
          latitud: -17.7755027,
          idZona: 1,
        },
        {
          longitud: -63.1907519,
          latitud: -17.7758041,
          idZona: 1,
        },
        {
          longitud: -63.190591,
          latitud: -17.7759114,
          idZona: 1,
        },
        {
          longitud: -63.1906768,
          latitud: -17.7761361,
          idZona: 1,
        },
        {
          longitud: -63.1906286,
          latitud: -17.7764222,
          idZona: 1,
        },
        {
          longitud: -63.1900331,
          latitud: -17.7775869,
          idZona: 1,
        },
        {
          longitud: -63.1901028,
          latitud: -17.7777759,
          idZona: 1,
        },
        {
          longitud: -63.1902168,
          latitud: -17.7784932,
          idZona: 1,
        },

        // {
        //   longitud: -63.1912864,
        //   latitud: -17.7797349,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.1917746,
        //   latitud: -17.779602,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.1921287,
        //   latitud: -17.7795561,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.1924505,
        //   latitud: -17.7794692,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.1927617,
        //   latitud: -17.779413,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.1930889,
        //   latitud: -17.7793364,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.193316,
        //   latitud: -17.7787441,
        //   idZona: 1,
        // },
        // {
        //   longitud: -63.1931872,
        //   latitud: -17.7759114,
        //   idZona: 1,
        // },
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
