'use strict';
const { Model, DataTypes } = require('sequelize');

const IncidenciaEstadoSchema = {
  idIncidenciaEstado: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idIncidencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'INCIDENCIA',
      key: 'idIncidencia',
    },
  },
  idEstado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ESTADO',
      key: 'idEstado',
    },
  },
  habilitado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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
};

module.exports = (sequelize) => {
  class IncidenciaEstadoModel extends Model {
    idIncidencia;
    idEstado;
    habilitado;
  }

  IncidenciaEstadoModel.init(IncidenciaEstadoSchema, {
    sequelize,
    modelName: 'INCIDENCIA_ESTADO',
    freezeTableName: true,
  });
  return IncidenciaEstadoModel;
};

module.exports.IncidenciaEstadoSchema = IncidenciaEstadoSchema;
