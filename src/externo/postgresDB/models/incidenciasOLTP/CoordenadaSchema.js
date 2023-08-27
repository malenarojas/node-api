'use strict';
const { Model, DataTypes } = require('sequelize');

const CoordenadaSchema = {
  idCoordenada: {
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
    allowNull: true,
  },
  idZona: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ZONA',
      key: 'idZona',
    },
  },
};

module.exports = (sequelize) => {
  class CoordenadaModel extends Model {
    idCoordenada;
    latitud;
    longitud;
    idZona;
  }

  CoordenadaModel.init(CoordenadaSchema, {
    sequelize,
    modelName: 'COORDENADA',
    freezeTableName: true,
    timestamps: false,
  });
  return CoordenadaModel;
};

module.exports.CoordenadaSchema = CoordenadaSchema;
