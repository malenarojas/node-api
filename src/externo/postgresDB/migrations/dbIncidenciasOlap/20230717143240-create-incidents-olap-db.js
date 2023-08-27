'use strict';

const {
  dimCategoriaIncidenciaSchema,
} = require('../../models/incidenciasOLAP/DimCategoriaIncidenciaSchema');
const {
  dimCoordenadaSchema,
} = require('../../models/incidenciasOLAP/DimCoordenadaSchema');
const {
  dimEstadoIncidenciaSchema,
} = require('../../models/incidenciasOLAP/DimEstadoIncidenciaSchema');
const {
  dimEstamentoSchema,
} = require('../../models/incidenciasOLAP/DimEstamentoSchema');
const {
  dimFacultadSchema,
} = require('../../models/incidenciasOLAP/DimFacultadSchema');
const {
  dimFechaSchema,
} = require('../../models/incidenciasOLAP/DimFechaSchema');
const {
  dimOperativoSchema,
} = require('../../models/incidenciasOLAP/DimOperativoSchema');
const { dimTipoSchema } = require('../../models/incidenciasOLAP/DimTipoSchema');
const { dimZonaSchema } = require('../../models/incidenciasOLAP/DimZonaSchema');
const {
  factIncidenciasSchema,
} = require('../../models/incidenciasOLAP/FactIncidenciasSchema');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dimfacultad', dimFacultadSchema);
    await queryInterface.createTable('dimoperativo', dimOperativoSchema);
    await queryInterface.createTable('dimestamento', dimEstamentoSchema);
    await queryInterface.createTable('dimtipo', dimTipoSchema);
    await queryInterface.createTable(
      'dimcategoria_incidencia',
      dimCategoriaIncidenciaSchema
    );
    await queryInterface.createTable(
      'dimestado_incidencia',
      dimEstadoIncidenciaSchema
    );
    await queryInterface.createTable('dimzona', dimZonaSchema);
    await queryInterface.createTable('dimcoordenada', dimCoordenadaSchema);
    await queryInterface.createTable('dimfecha', dimFechaSchema);
    await queryInterface.createTable('factincidencias', factIncidenciasSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
