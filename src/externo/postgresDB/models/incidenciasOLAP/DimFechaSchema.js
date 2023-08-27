'use strict';
const { Model, DataTypes } = require('sequelize');

const dimFechaSchema = {
  id_fecha: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dia_semana: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dia_anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  class dimFechaModel extends Model {
    id_fecha;
    fecha;
    dia;
    mes;
    anio;
  }

  dimFechaModel.init(dimFechaSchema, {
    sequelize,
    modelName: 'dimfecha',
    freezeTableName: true,
  });
  return dimFechaModel;
};

module.exports.dimFechaSchema = dimFechaSchema;
