'use strict';

const { DataTypes } = require('sequelize');
const { RolSchema } = require('../../models/incidenciasOLTP/RolSchema');
const { PermisoSchema } = require('../../models/incidenciasOLTP/PermisoSchema');
const {
  RolPermisoSchema,
} = require('../../models/incidenciasOLTP/RolPermisoSchema');
const {
  FacultadSchema,
} = require('../../models/incidenciasOLTP/FacultadSchema');
const {
  CategoriaIncidenciaSchema,
} = require('../../models/incidenciasOLTP/CategoriaIncidenciaSchema');
const {
  CoordenadaSchema,
} = require('../../models/incidenciasOLTP/CoordenadaSchema');
const {
  DenunciaSchema,
} = require('../../models/incidenciasOLTP/DenunciaSchema');
const { EstadoSchema } = require('../../models/incidenciasOLTP/EstadoSchema');
const {
  EstamentoSchema,
} = require('../../models/incidenciasOLTP/EstamentoSchema');
const {
  IncidenciaEstadoSchema,
} = require('../../models/incidenciasOLTP/IncidenciaEstadoSchema');
const {
  IncidenciaEstamentoSchema,
} = require('../../models/incidenciasOLTP/IncidenciaEstamentoSchema');
const {
  IncidenciaSchema,
} = require('../../models/incidenciasOLTP/IncidenciaSchema');
const {
  MediaIncidenciaSchema,
} = require('../../models/incidenciasOLTP/MediaIncidenciaSchema');
const {
  OperativoSchema,
} = require('../../models/incidenciasOLTP/OperativoSchema');
const { TipoSchema } = require('../../models/incidenciasOLTP/TipoSchema');
const { UsuarioSchema } = require('../../models/incidenciasOLTP/UsuarioSchema');
const { ZonaSchema } = require('../../models/incidenciasOLTP/ZonaSchema');
const {
  CategoriaDenunciaSchema,
} = require('../../models/incidenciasOLTP/CategoriaDenunciaSchema');
const {
  TipoSancionSchema,
} = require('../../models/incidenciasOLTP/TipoSancionSchema');
const { SancionSchema } = require('../../models/incidenciasOLTP/SancionSchema');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tabla PERMISO
    await queryInterface.createTable('PERMISO', PermisoSchema);
    // Tabla ROL
    await queryInterface.createTable('ROL', RolSchema);
    // Tabla ROL_PERMISO
    await queryInterface.createTable('ROL_PERMISO', RolPermisoSchema);
    // Tabla FACULTAD
    await queryInterface.createTable('FACULTAD', FacultadSchema);
    // Tabla USUARIO
    await queryInterface.createTable('USUARIO', UsuarioSchema);
    // Tabla OPERATIVO
    await queryInterface.createTable('OPERATIVO', OperativoSchema);
    // Tabla ESTAMENTO
    await queryInterface.createTable('ESTAMENTO', EstamentoSchema);
    // Tabla TIPO_SANCION
    await queryInterface.createTable('TIPO_SANCION', TipoSancionSchema);
    // Tabla CATEGORIA_INCIDENCIA
    await queryInterface.createTable(
      'CATEGORIA_INCIDENCIA',
      CategoriaIncidenciaSchema
    );
    // Tabla ESTADO
    await queryInterface.createTable('ESTADO', EstadoSchema);
    // Tabla CATEGORIA_DENUNCIA
    await queryInterface.createTable(
      'CATEGORIA_DENUNCIA',
      CategoriaDenunciaSchema
    );
    // Tabla TIPO
    await queryInterface.createTable('TIPO', TipoSchema);
    // Tabla DENUNCIA
    await queryInterface.createTable('DENUNCIA', DenunciaSchema);
    // Tabla ZONA
    await queryInterface.createTable('ZONA', ZonaSchema);
    // Tabla COORDENADA
    await queryInterface.createTable('COORDENADA', CoordenadaSchema);
    // // Tabla INCIDENCIA
    await queryInterface.createTable('INCIDENCIA', IncidenciaSchema);
    // Tabla INCIDENCIA_ESTADO
    await queryInterface.createTable(
      'INCIDENCIA_ESTADO',
      IncidenciaEstadoSchema
    );
    // Tabla INCIDENCIA_ESTAMENTO
    await queryInterface.createTable(
      'INCIDENCIA_ESTAMENTO',
      IncidenciaEstamentoSchema
    );
    // Tabla INFRACTOR_FORANEO
    await queryInterface.createTable('INFRACTOR_FORANEO', {
      idInfractorForaneo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ci: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
    // Tabla INCIDENCIA_INFRACTOR_FORANEO
    await queryInterface.createTable('INCIDENCIA_INFRACTOR_FORANEO', {
      idIncidencia: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        references: {
          model: 'INCIDENCIA',
          key: 'idIncidencia',
        },
      },
      idInfractorForaneo: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        primaryKey: true,
        references: {
          model: 'INFRACTOR_FORANEO',
          key: 'idInfractorForaneo',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
    // Tabla SANCION
    await queryInterface.createTable('SANCION', SancionSchema);
    // Tabla MEDIA_INCIDENCIA
    await queryInterface.createTable('MEDIA_INCIDENCIA', MediaIncidenciaSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropAllTables();
  },
};
