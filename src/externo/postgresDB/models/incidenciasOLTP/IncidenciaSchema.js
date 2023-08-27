'use strict';
const { Model, DataTypes } = require('sequelize');

const IncidenciaSchema = {
  idIncidencia: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  procedimiento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitudDispositivo: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  longitudDispositivo: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  latitudIncidencia: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  longitudIncidencia: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  montoTotal: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
  },
  idOperativo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'OPERATIVO',
      key: 'idUsuario',
    },
  },
  idCategoriaIncidencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'CATEGORIA_INCIDENCIA',
      key: 'idCategoriaIncidencia',
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
  idDenuncia: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    references: {
      model: 'DENUNCIA',
      key: 'idDenuncia',
    },
  },
  idZona: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ZONA',
      key: 'idZona',
    },
  },
  idUsuarioModifica: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
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
  class IncidenciaModel extends Model {
    idIncidencia;
    descripcion;
    procedimiento;
    // Latitud del dispositivo en el momento que se registró la incidencia.
    latitudDispositivo;
    // Longitud del dispositivo en el momento que se registró la incidencia.
    longitudDispositivo;
    // Latitud obtenida del mapa en el que el usuario apunta en dónde está sucediendo la incidencia.
    latitudIncidencia;
    // Latitud obtenida del mapa en el que el usuario apunta en dónde está sucediendo la incidencia.
    longitudIncidencia;
    montoTotal;
    idOperativo;
    idCategoriaIncidencia;
    idTipo;
    idDenuncia;
    idZona;
    idUsuarioModifica;

    static associate(models) {
      models.CATEGORIA_INCIDENCIA.hasMany(this, {
        foreignKey: 'idCategoriaIncidencia',
      });
      this.belongsTo(models.CATEGORIA_INCIDENCIA, {
        foreignKey: 'idCategoriaIncidencia',
        targetKey: 'idCategoriaIncidencia',
        as: 'categoria',
      });

      this.belongsToMany(models.ESTADO, {
        through: models.INCIDENCIA_ESTADO,
        foreignKey: 'idIncidencia',
      });
      models.ESTADO.belongsToMany(this, {
        through: models.INCIDENCIA_ESTADO,
        foreignKey: 'idEstado',
      });
      models.SANCION.hasMany(this, {
        foreignKey: 'idIncidencia',
      });
      this.belongsTo(models.SANCION, {
        foreignKey: 'idIncidencia',
        targetKey: 'idIncidencia',
        as: 'sancion',
      });
    }
  }

  IncidenciaModel.init(IncidenciaSchema, {
    sequelize,
    modelName: 'INCIDENCIA',
    freezeTableName: true,
  });

  return IncidenciaModel;
};

module.exports.IncidenciaSchema = IncidenciaSchema;
