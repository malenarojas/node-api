'use strict';
const { Model, DataTypes } = require('sequelize');

const dimEstamentoSchema = {
  id_estamento: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  nombre_completo_estamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contador_panico: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
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
  class dimEstamentoModel extends Model {
    id_estamento;
    nombre_completo_estamento;
    estamento;
    contador_panico;
  }

  dimEstamentoModel.init(dimEstamentoSchema, {
    sequelize,
    modelName: 'dimestamento',
    freezeTableName: true,
  });
  return dimEstamentoModel;
};

module.exports.dimEstamentoSchema = dimEstamentoSchema;
