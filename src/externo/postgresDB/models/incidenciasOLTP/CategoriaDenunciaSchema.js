'use strict';
const { Model, DataTypes } = require('sequelize');

const CategoriaDenunciaSchema = {
  idCategoriaDenuncia: {
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
  class CategoriaDenunciaModel extends Model {
    idCategoriaDenuncia;
    categoria;
    descripcion;
  }

  CategoriaDenunciaModel.init(CategoriaDenunciaSchema, {
    sequelize,
    modelName: 'CATEGORIA_DENUNCIA',
    freezeTableName: true,
  });
  return CategoriaDenunciaModel;
};

module.exports.CategoriaDenunciaSchema = CategoriaDenunciaSchema;
