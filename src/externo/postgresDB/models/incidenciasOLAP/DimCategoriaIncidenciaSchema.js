'use strict';
const { Model, DataTypes } = require('sequelize');

const dimCategoriaIncidenciaSchema = {
  id_categoria_incidencia: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  categoria_incidencia: {
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
  class dimCategoriaIncidenciaModel extends Model {
    id_categoria_incidencia;
    categoria_incidencia;
  }

  dimCategoriaIncidenciaModel.init(dimCategoriaIncidenciaSchema, {
    sequelize,
    modelName: 'dimcategoria_incidencia',
    freezeTableName: true,
  });
  return dimCategoriaIncidenciaModel;
};

module.exports.dimCategoriaIncidenciaSchema = dimCategoriaIncidenciaSchema;
