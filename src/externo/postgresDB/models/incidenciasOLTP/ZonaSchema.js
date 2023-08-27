'use strict';
const { Model, DataTypes } = require('sequelize');

const ZonaSchema = {
  idZona: {
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
  habilitado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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

module.exports = (sequelize, DataTypes) => {
  class ZonaModel extends Model {
    idZona;
    nombre;
    descripcion;
    habilitado;

    static associate(models) {
      ZonaModel.hasMany(models.INCIDENCIA, {
        foreignKey: 'idZona',
      });
      models.INCIDENCIA.belongsTo(ZonaModel, {
        foreignKey: 'idZona',
        targetKey: 'idZona',
        as: 'zona',
      });
    }
  }

  ZonaModel.init(ZonaSchema, {
    sequelize,
    modelName: 'ZONA',
    freezeTableName: true,
  });

  return ZonaModel;
};

module.exports.ZonaSchema = ZonaSchema;
