'use strict';
const { Model, DataTypes } = require('sequelize');

const RolSchema = {
  idRol: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  class RolModel extends Model {
    idRol;
    nombre;
  }

  RolModel.init(RolSchema, {
    sequelize,
    modelName: 'ROL',
    freezeTableName: true,
  });
  return RolModel;
};

module.exports.RolSchema = RolSchema;
