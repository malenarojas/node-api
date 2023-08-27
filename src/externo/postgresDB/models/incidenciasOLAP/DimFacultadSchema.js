'use strict';
const { Model, DataTypes } = require('sequelize');

const dimFacultadSchema = {
  id_facultad: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  nombre_facultad: {
    type: DataTypes.STRING,
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
  class dimFacultadModel extends Model {
    id_facultad;
    nombre_facultad;
  }

  dimFacultadModel.init(dimFacultadSchema, {
    sequelize,
    modelName: 'dimfacultad',
    freezeTableName: true,
  });
  return dimFacultadModel;
};

module.exports.dimFacultadSchema = dimFacultadSchema;
