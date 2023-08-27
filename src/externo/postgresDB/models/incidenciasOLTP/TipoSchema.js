'use strict';
const { Model, DataTypes } = require('sequelize');

const TipoSchema = {
  idTipo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
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
module.exports = (sequelize) => {
  class TipoModel extends Model {
    idTipo;
    descripcion;

    static associate(models) {
      TipoModel.hasMany(models.INCIDENCIA, {
        foreignKey: 'idTipo',
      });
      models.INCIDENCIA.belongsTo(TipoModel, {
        foreignKey: 'idTipo',
        targetKey: 'idTipo',
        as: 'tipo',
      });
    }
  }

  TipoModel.init(TipoSchema, {
    sequelize,
    modelName: 'TIPO',
    freezeTableName: true,
  });

  return TipoModel;
};

module.exports.TipoSchema = TipoSchema;
