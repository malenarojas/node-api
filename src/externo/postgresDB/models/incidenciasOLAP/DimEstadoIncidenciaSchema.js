'use strict';
const { Model, DataTypes } = require('sequelize');

const dimEstadoIncidenciaSchema = {
  id_estado_incidencia: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  id_incidencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_estado: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  version: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
};

module.exports = (sequelize) => {
  class dimEstadoIncidenciaModel extends Model {
    id_estado_incidencia;
    estado;
  }

  dimEstadoIncidenciaModel.init(dimEstadoIncidenciaSchema, {
    sequelize,
    modelName: 'dimestado_incidencia',
    freezeTableName: true,
  });
  return dimEstadoIncidenciaModel;
};

module.exports.dimEstadoIncidenciaSchema = dimEstadoIncidenciaSchema;
