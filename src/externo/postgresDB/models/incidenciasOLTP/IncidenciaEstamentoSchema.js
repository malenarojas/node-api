'use strict';
const { Model, DataTypes } = require('sequelize');

const IncidenciaEstamentoSchema = {
  idIncidencia: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'INCIDENCIA',
      key: 'idIncidencia',
    },
  },
  idEstamento: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: 'ESTAMENTO',
      key: 'idUsuario',
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
  class IncidenciaEstamentoModel extends Model {
    idIncidencia;
    idEstamento;

    // static associate(models) {
    //   models.INCIDENCIA.hasMany(this, {
    //     foreignKey: 'idIncidencia',
    //   });
    //   this.belongsTo(models.INCIDENCIA, {
    //     foreignKey: 'idIncidencia',
    //     targetKey: 'idIncidencia',
    //     as: 'estamento',
    //   });
    // }
  }

  IncidenciaEstamentoModel.init(IncidenciaEstamentoSchema, {
    sequelize,
    modelName: 'INCIDENCIA_ESTAMENTO',
    freezeTableName: true,
  });
  return IncidenciaEstamentoModel;
};

module.exports.IncidenciaEstamentoSchema = IncidenciaEstamentoSchema;
