'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tabla PERMISO
    await queryInterface.bulkInsert(
      'PERMISO',
      [
        {
          idPermiso: 1,
          nombre: 'Listar Usuarios',
        },
        {
          idPermiso: 2,
          nombre: 'Registrar Usuario',
        },
        {
          idPermiso: 3,
          nombre: 'Editar Usuario',
        },
        {
          idPermiso: 4,
          nombre: 'Mostrar Detalle Usuario',
        },
        {
          idPermiso: 5,
          nombre: 'Listar Incidencias',
        },
        {
          idPermiso: 6,
          nombre: 'Registrar Inicidenia',
        },
        {
          idPermiso: 7,
          nombre: 'Editar Incidencia',
        },
        {
          idPermiso: 8,
          nombre: 'Eliminar Incidencia',
        },

        {
          idPermiso: 9,
          nombre: 'Mostrar Detalle Incidencia',
        },
        {
          idPermiso: 10,
          nombre: 'Asignar Incidencia',
        },
        {
          idPermiso: 11,
          nombre: 'Asignar Sanción Incidencia',
        },
        {
          idPermiso: 12,
          nombre: 'Asignar Denuncia',
        },
        {
          idPermiso: 13,
          nombre: 'Listar Tipos Sanciones',
        },
        {
          idPermiso: 14,
          nombre: 'Registrar Tipo Sanción',
        },
        {
          idPermiso: 15,
          nombre: 'Editar Tipo Sanción',
        },
        {
          idPermiso: 16,
          nombre: 'Eliminar Tipo Sanción',
        },
        {
          idPermiso: 17,
          nombre: 'Listar Denuncia',
        },
        {
          idPermiso: 18,
          nombre: 'Registrar Denuncia',
        },
        {
          idPermiso: 19,
          nombre: 'Editar Denuncia',
        },
        {
          idPermiso: 20,
          nombre: 'Eliminar Denuncia',
        },
        {
          idPermiso: 21,
          nombre: 'Ver Denuncia Detalle',
        },
        {
          idPermiso: 22,
          nombre: 'Panel de Control',
        },
      ],
      {}
    );
    // Tabla ROL
    await queryInterface.bulkInsert(
      'ROL',
      [
        {
          idRol: 1,
          nombre: 'Administrador de Sistemas',
        },
        {
          idRol: 2,
          nombre: 'Administrador Profesional I',
        },
        {
          idRol: 3,
          nombre: 'Encargado TICs',
        },
        {
          idRol: 4,
          nombre: 'Asistente Técnico',
        },
        {
          idRol: 5,
          nombre: 'Coordinador de Vigilancia',
        },
        {
          idRol: 6,
          nombre: 'Supervisor',
        },
        {
          idRol: 7,
          nombre: 'Encargado Vigilantes',
        },
        {
          idRol: 8,
          nombre: 'Vigilante',
        },

        {
          idRol: 9,
          nombre: 'Estamento Universitario',
        },
      ],
      {}
    );
    // Tabla ROL_PERMISO
    await queryInterface.bulkInsert(
      'ROL_PERMISO',
      [
        {
          idRol: 1,
          idPermiso: 1,
        },
        {
          idRol: 1,
          idPermiso: 2,
        },
        {
          idRol: 1,
          idPermiso: 3,
        },
        {
          idRol: 1,
          idPermiso: 4,
        },
        {
          idRol: 1,
          idPermiso: 5,
        },
        {
          idRol: 1,
          idPermiso: 6,
        },
        {
          idRol: 1,
          idPermiso: 7,
        },
        {
          idRol: 1,
          idPermiso: 8,
        },
        {
          idRol: 1,
          idPermiso: 9,
        },
        {
          idRol: 1,
          idPermiso: 10,
        },
        {
          idRol: 1,
          idPermiso: 11,
        },
        {
          idRol: 1,
          idPermiso: 12,
        },
        {
          idRol: 1,
          idPermiso: 13,
        },
        {
          idRol: 1,
          idPermiso: 14,
        },
        {
          idRol: 1,
          idPermiso: 15,
        },
        {
          idRol: 1,
          idPermiso: 16,
        },
        {
          idRol: 1,
          idPermiso: 17,
        },
        {
          idRol: 1,
          idPermiso: 18,
        },
        {
          idRol: 1,
          idPermiso: 19,
        },
        {
          idRol: 1,
          idPermiso: 20,
        },
        {
          idRol: 1,
          idPermiso: 21,
        },
        {
          idRol: 1,
          idPermiso: 22,
        },
        // Rol Administrador Profesional I
        {
          idRol: 2,
          idPermiso: 5,
        },
        {
          idRol: 2,
          idPermiso: 6,
        },
        {
          idRol: 2,
          idPermiso: 7,
        },
        {
          idRol: 2,
          idPermiso: 8,
        },
        {
          idRol: 2,
          idPermiso: 9,
        },
        {
          idRol: 2,
          idPermiso: 10,
        },
        {
          idRol: 2,
          idPermiso: 11,
        },
        {
          idRol: 2,
          idPermiso: 12,
        },
        {
          idRol: 2,
          idPermiso: 13,
        },
        {
          idRol: 2,
          idPermiso: 14,
        },
        {
          idRol: 2,
          idPermiso: 15,
        },
        {
          idRol: 2,
          idPermiso: 16,
        },
        {
          idRol: 2,
          idPermiso: 17,
        },
        {
          idRol: 2,
          idPermiso: 18,
        },
        {
          idRol: 2,
          idPermiso: 19,
        },
        {
          idRol: 2,
          idPermiso: 20,
        },
        {
          idRol: 2,
          idPermiso: 21,
        },
        {
          idRol: 2,
          idPermiso: 22,
        },
        // Rol Coordinador de Vigilancia
        {
          idRol: 5,
          idPermiso: 5,
        },
        {
          idRol: 5,
          idPermiso: 6,
        },
        {
          idRol: 5,
          idPermiso: 7,
        },
        {
          idRol: 5,
          idPermiso: 8,
        },
        {
          idRol: 5,
          idPermiso: 9,
        },
        {
          idRol: 5,
          idPermiso: 10,
        },
        {
          idRol: 5,
          idPermiso: 11,
        },
        {
          idRol: 5,
          idPermiso: 12,
        },
        {
          idRol: 5,
          idPermiso: 13,
        },
        {
          idRol: 5,
          idPermiso: 14,
        },
        {
          idRol: 5,
          idPermiso: 15,
        },
        {
          idRol: 5,
          idPermiso: 16,
        },
        {
          idRol: 5,
          idPermiso: 17,
        },
        {
          idRol: 5,
          idPermiso: 18,
        },
        {
          idRol: 5,
          idPermiso: 19,
        },
        {
          idRol: 5,
          idPermiso: 20,
        },
        {
          idRol: 5,
          idPermiso: 21,
        },
        // Rol Vigilante
        {
          idRol: 8,
          idPermiso: 5,
        },
        {
          idRol: 8,
          idPermiso: 6,
        },
        {
          idRol: 8,
          idPermiso: 9,
        },
        // Rol Estamento Universitario
        {
          idRol: 9,
          idPermiso: 17,
        },
        {
          idRol: 9,
          idPermiso: 18,
        },
        {
          idRol: 9,
          idPermiso: 21,
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
