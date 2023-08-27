'use strict';
const { Model, DataTypes } = require('sequelize');

const FacultadSchema = {
  idFacultad: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
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
  class FacultadModel extends Model {
    idFacultad;
    descripcion;
  }

  FacultadModel.init(FacultadSchema, {
    sequelize,
    modelName: 'FACULTAD',
    freezeTableName: true,
  });
  return FacultadModel;
};

module.exports.FacultadSchema = FacultadSchema;
