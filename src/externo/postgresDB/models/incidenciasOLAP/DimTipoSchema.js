'use strict';
const { Model, DataTypes } = require('sequelize');

const dimTipoSchema = {
  id_tipo: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  tipo: {
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
  class dimTipoModel extends Model {
    id_tipo;
    tipo;
  }

  dimTipoModel.init(dimTipoSchema, {
    sequelize,
    modelName: 'dimtipo',
    freezeTableName: true,
  });
  return dimTipoModel;
};

module.exports.dimTipoSchema = dimTipoSchema;
