'use strict';
const { Model, DataTypes } = require('sequelize');

const EstadoSchema = {
  idEstado: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
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
};

module.exports = (sequelize) => {
  class EstadoModel extends Model {
    idEstado;
    nombre;
    descripcion;
  }

  EstadoModel.init(EstadoSchema, {
    sequelize,
    modelName: 'ESTADO',
    freezeTableName: true,
  });
  return EstadoModel;
};

module.exports.EstadoSchema = EstadoSchema;
