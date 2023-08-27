'use strict';
const { Model, DataTypes } = require('sequelize');

const DenunciaSchema = {
  idDenuncia: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefonoContacto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idEstamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ESTAMENTO',
      key: 'idUsuario',
    },
  },
  idCategoriaDenuncia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CATEGORIA_DENUNCIA',
      key: 'idCategoriaDenuncia',
    },
  },
  idTipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TIPO',
      key: 'idTipo',
    },
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
  class DenunciaModel extends Model {
    idDenuncia;
    descripcion;
    telefonoContacto;
    idEstamento;
    idTipo;
    idCategoriaDenuncia;
  }

  DenunciaModel.init(DenunciaSchema, {
    sequelize,
    modelName: 'DENUNCIA',
    freezeTableName: true,
  });
  return DenunciaModel;
};

module.exports.DenunciaSchema = DenunciaSchema;
