'use strict';
const { Model, DataTypes } = require('sequelize');

const dimOperativoSchema = {
  id_operativo: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  nombre_operativo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ci: {
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
    id_operativo;
    nombre_operativo;
  }

  dimFacultadModel.init(dimOperativoSchema, {
    sequelize,
    modelName: 'dimoperativo',
    freezeTableName: true,
  });
  return dimFacultadModel;
};

module.exports.dimOperativoSchema = dimOperativoSchema;
