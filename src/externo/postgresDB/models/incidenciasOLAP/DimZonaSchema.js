'use strict';
const { Model, DataTypes, DOUBLE } = require('sequelize');

const dimZonaSchema = {
  id_zona: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true,
  },
  zona: {
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
  class dimZonaModel extends Model {
    id_zona;
    zona;
    latitud;
    longitud;
  }

  dimZonaModel.init(dimZonaSchema, {
    sequelize,
    modelName: 'dimzona',
    freezeTableName: true,
  });
  return dimZonaModel;
};

module.exports.dimZonaSchema = dimZonaSchema;
