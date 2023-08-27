'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'TIPO_SANCION',
      [
        {
          idTipoSancion: 1,
          nombre: 'Advertencia',
          descripcion: 'Advertencia descripción',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 2,
          nombre: 'Trabajo Comunitario',
          descripcion: 'Trabajo Comunitario descripción',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 3,
          nombre: 'Multa Administrativa Estudiantes',
          descripcion: 'Multa Administrativa a estudiantes.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 4,
          nombre: 'Multa Administrativa Docentes',
          descripcion: 'Multa Administrativa a docentes.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 5,
          nombre: 'Multa Administrativa Administrativos',
          descripcion:
            'Multa Administrativa a personas con cargos administrativos.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 6,
          nombre: 'Multa Administrativa Foráneos',
          descripcion:
            'Multa Administrativa a personas ajenas a la universidad.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 7,
          nombre: 'Suspensión Temporal Estudiantes',
          descripcion:
            'Suspensión Temporal desde seis hasta tres años para estudiantes.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 8,
          nombre: 'Suspensión Temporal Docentes o Administrativos',
          descripcion:
            'Suspensión temporal de un mes hasta un año sin goce de haberes.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          idTipoSancion: 9,
          nombre: 'Derivación al Tribunal de Justicia Universitaria',
          descripcion: 'Derivación al Tribunal de Justicia Universitaria.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert('SANCION', [
      {
        idIncidencia: 1,
        idTipoSancion: 2,
        descripcion:
          'La sanción aplicada es trabajo comunitario limpiando los baños del módulo 243.',
        montoTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 2,
        idTipoSancion: 3,
        descripcion: `La sanción aplicada es una multa administrativa, con la compra de 1 balde pintura blanca de 20kg, Recibo #3123.`,
        montoTotal: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 3,
        idTipoSancion: 9,
        descripcion: `La sanción fue aplicada en función a lo que dictaminó el Tribunal de Justicia Universitaria, que es el pago de 1500Bs. por el impacto del daño institucional ecónomico y moral ocasionado a la casa de estudios.`,
        montoTotal: 1500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 5,
        idTipoSancion: 3,
        descripcion: `La sanción aplicada es una multa administrativa para estudiantes, con la compra de 2 baldes con líquida para limpieza de las oficinas de Adm.. Recibo #56133.`,
        montoTotal: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 6,
        idTipoSancion: 3,
        descripcion: `La sanción aplicada es una multa administrativa para estudiantes reincidentes, con la compra de 4 baldes con líquida para limpieza de las oficinas de Adm.. Recibo #236133.`,
        montoTotal: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 7,
        idTipoSancion: 2,
        descripcion:
          'La sanción aplicada es trabajo comunitario limpiando los baños del módulo 236 de la poderosa FICCT.',
        montoTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 8,
        idTipoSancion: 3,
        descripcion: `La sanción aplicada es una multa administrativa para estudiantes, con la compra de utensilios de limpieza y material de escritorio para las oficinas de Adm.. Recibo #686133.`,
        montoTotal: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 9,
        idTipoSancion: 3,
        descripcion: `La sanción aplicada es una multa administrativa para estudiantes, con la compra de utensilios de cocina para las oficinas de Adm.. Recibo #10086533.`,
        montoTotal: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 11,
        idTipoSancion: 3,
        descripcion: `La sanción aplicada es una multa administrativa para estudiantes, con la compra de herramientas para las oficinas de Adm.. Recibo #30028533.`,
        montoTotal: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 12,
        idTipoSancion: 1,
        descripcion:
          'La sanción aplicada es una advertencia por escrito al estudiante agresor.',
        montoTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 13,
        idTipoSancion: 1,
        descripcion:
          'La sanción aplicada es una advertencia por escrito al estudiante agresor.',
        montoTotal: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idIncidencia: 14,
        idTipoSancion: 9,
        descripcion: `La sanción fue aplicada en función a lo que dictaminó el Tribunal de Justicia Universitaria, que es el pago de 8000Bs. por el impacto del daño institucional ecónomico y moral ocasionado a la casa de estudios.`,
        montoTotal: 8000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
