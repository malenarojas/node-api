'use strict';
const { Model, DataTypes } = require('sequelize');

const OperativoSchema = {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'USUARIO',
      key: 'idUsuario',
    },
  },
  fechaIngreso: {
    type: DataTypes.BIGINT,
    allowNull: false,
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
  class OperativoModel extends Model {
    idUsuario;
    fechaIngreso;

    static associate(models) {
      OperativoModel.hasMany(models.INCIDENCIA, {
        foreignKey: 'idOperativo',
      });
      models.INCIDENCIA.belongsTo(OperativoModel, {
        foreignKey: 'idOperativo',
        targetKey: 'idUsuario',
        as: 'operativo',
      });
    }
  }

  OperativoModel.init(OperativoSchema, {
    sequelize,
    modelName: 'OPERATIVO',
    freezeTableName: true,
  });

  return OperativoModel;
};

module.exports.OperativoSchema = OperativoSchema;
