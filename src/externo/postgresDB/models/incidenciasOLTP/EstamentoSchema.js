'use strict';
const { Model, DataTypes } = require('sequelize');

const EstamentoSchema = {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'USUARIO',
      key: 'idUsuario',
    },
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contadorPanico: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  idTipoEstamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idFacultad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    references: {
      model: 'FACULTAD',
      key: 'idFacultad',
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
  class EstamentoModel extends Model {
    idUsuario;
    codigo;
    correo;
    contadorPanico;
    idTipoEstamento;
    idFacultad;
  }

  EstamentoModel.init(EstamentoSchema, {
    sequelize,
    modelName: 'ESTAMENTO',
    freezeTableName: true,
  });
  return EstamentoModel;
};

module.exports.EstamentoSchema = EstamentoSchema;
