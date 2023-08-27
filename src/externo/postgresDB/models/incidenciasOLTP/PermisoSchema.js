'use strict';
const { Model, DataTypes } = require('sequelize');

const PermisoSchema = {
  idPermiso: {
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
  class PermisoModel extends Model {
    idPermiso;
    nombre;
  }

  PermisoModel.init(PermisoSchema, {
    sequelize,
    modelName: 'PERMISO',
    freezeTableName: true,
  });
  return PermisoModel;
};

module.exports.PermisoSchema = PermisoSchema;
