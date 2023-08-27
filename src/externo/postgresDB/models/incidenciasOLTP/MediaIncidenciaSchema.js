'use strict';
const { Model, DataTypes } = require('sequelize');

const MediaIncidenciaSchema = {
  idMediaIncidencia: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  base64: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
  idIncidencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'INCIDENCIA',
      key: 'idIncidencia',
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
  class MediaIncidenciaModel extends Model {
    idMediaIncidencia;
    url;
    base64;
    idIncidencia;

    static associate(models) {
      models.INCIDENCIA.hasMany(this, {
        foreignKey: 'idIncidencia',
        as: 'medias',
      });
      this.belongsTo(models.INCIDENCIA, {
        foreignKey: 'idIncidencia',
        targetKey: 'idIncidencia',
      });
    }
  }

  MediaIncidenciaModel.init(MediaIncidenciaSchema, {
    sequelize,
    modelName: 'MEDIA_INCIDENCIA',
    freezeTableName: true,
  });
  return MediaIncidenciaModel;
};

module.exports.MediaIncidenciaSchema = MediaIncidenciaSchema;
