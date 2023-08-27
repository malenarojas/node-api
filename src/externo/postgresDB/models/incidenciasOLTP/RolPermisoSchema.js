'use strict';
const { Model, DataTypes } = require('sequelize');

const RolPermisoSchema = {
  idRol: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'ROL',
      key: 'idRol',
    },
  },
  idPermiso: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'PERMISO',
      key: 'idPermiso',
    },
  },
  habilitado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
};

module.exports = (sequelize) => {
  class RolPermisoModel extends Model {
    idRol;
    idPermiso;
  }

  RolPermisoModel.init(RolPermisoSchema, {
    sequelize,
    modelName: 'ROL_PERMISO',
    freezeTableName: true,
  });
  return RolPermisoModel;
};

module.exports.RolPermisoSchema = RolPermisoSchema;
