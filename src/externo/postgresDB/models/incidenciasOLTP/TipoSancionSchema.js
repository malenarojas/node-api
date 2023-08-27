'use strict';
const { Model, DataTypes } = require('sequelize');

const TipoSancionSchema = {
  idTipoSancion: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
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
  class TipoSancionModel extends Model {
    idTipoSancion;
    nombre;
    descripcion;
  }

  TipoSancionModel.init(TipoSancionSchema, {
    sequelize,
    modelName: 'TIPO_SANCION',
    freezeTableName: true,
  });
  return TipoSancionModel;
};

module.exports.TipoSancionSchema = TipoSancionSchema;
