'use strict';
const { Model, DataTypes } = require('sequelize');

const CategoriaIncidenciaSchema = {
  idCategoriaIncidencia: {
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
  class CategoriaIncidenciaModel extends Model {
    idCategoriaIncidencia;
    categoria;
    descripcion;
  }

  CategoriaIncidenciaModel.init(CategoriaIncidenciaSchema, {
    sequelize,
    modelName: 'CATEGORIA_INCIDENCIA',
    freezeTableName: true,
  });
  return CategoriaIncidenciaModel;
};

module.exports.CategoriaIncidenciaSchema = CategoriaIncidenciaSchema;
