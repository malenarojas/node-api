'use strict';
const { Model, DataTypes, DOUBLE } = require('sequelize');

const dimCoordenadaSchema = {
  id_zona: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'dimzona',
      key: 'id_zona',
    },
  },
  id_coordenada: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  latitud: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  longitud: {
    type: DataTypes.DOUBLE,
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
  class dimCoordenadaModel extends Model {
    id_zona;
    id_coordenada;
    latitud;
    longitud;
  }

  dimCoordenadaModel.init(dimCoordenadaSchema, {
    sequelize,
    modelName: 'dimcoordenada',
    freezeTableName: true,
  });
  return dimCoordenadaModel;
};

module.exports.dimCoordenadaSchema = dimCoordenadaSchema;
