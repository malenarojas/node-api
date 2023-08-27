'use strict';
const { Model, DataTypes } = require('sequelize');

const SancionSchema = {
  idSancion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idIncidencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'INCIDENCIA',
      key: 'idIncidencia',
    },
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  montoTotal: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    defaultValue: 0,
  },
  habilitado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  idTipoSancion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TIPO_SANCION',
      key: 'idTipoSancion',
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
  class SancionModel extends Model {
    idSancion;
    idIncidencia;
    descripcion;
    habilitado;
    idTipoSancion;

    static associate(models) {
      models.INCIDENCIA.hasMany(this, {
        foreignKey: 'idIncidencia',
      });
      this.belongsTo(models.INCIDENCIA, {
        foreignKey: 'idIncidencia',
        targetKey: 'idIncidencia',
        as: 'incidencia',
      });
      models.TIPO_SANCION.hasMany(this, {
        foreignKey: 'idTipoSancion',
      });
      this.belongsTo(models.TIPO_SANCION, {
        foreignKey: 'idTipoSancion',
        targetKey: 'idTipoSancion',
        as: 'tipoSancion',
      });
    }
  }

  SancionModel.init(SancionSchema, {
    sequelize,
    modelName: 'SANCION',
    freezeTableName: true,
  });
  return SancionModel;
};

module.exports.SancionSchema = SancionSchema;
