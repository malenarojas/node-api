'use strict';
const { Model, DataTypes } = require('sequelize');

const factIncidenciasSchema = {
  id_incidencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_operativo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimoperativo',
    //   key: 'id_operativo',
    // },
  },
  id_tipo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimtipo',
    //   key: 'id_tipo',
    // },
  },
  id_estado_incidencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimestado_incidencia',
    //   key: 'id_estado_incidencia',
    // },
  },
  id_estamento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimestamento',
    //   key: 'id_estamento',
    // },
  },
  id_zona: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimzona',
    //   key: 'id_zona',
    // },
  },
  latitud: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  longitud: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  id_categoria_incidencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimcategoria_incidencia',
    //   key: 'id_categoria_incidencia',
    // },
  },
  id_facultad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimfacultad',
    //   key: 'id_facultad',
    // },
  },
  id_fecha: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'dimfecha',
    //   key: 'id_fecha',
    // },
  },
  fecha_actualizacion: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  monto_total: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  tiempo_promedio: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  cantidad_reincidentes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  porcentaje_reincidentes: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  variacion_porcentual: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
};

module.exports = (sequelize) => {
  class factIncidenciasModel extends Model {
    id_operativo;
    id_tipo;
    idEstado;
    id_estamento;
    id_zona;
    id_categoria_incidencia;
    id_facultad;
    id_fecha;
    cantidad;
    monto_total;
    tiempo_promedio;
    cantidad_reincidentes;
    porcentaje_reincidentes;
    variacion_porcentual;

    static associate(models) {
      models.dimoperativo.hasMany(this, {
        foreignKey: 'id_operativo',
      });
      this.belongsTo(models.dimoperativo, {
        foreignKey: 'id_operativo',
        targetKey: 'id_operativo',
        as: 'operativo',
      });

      models.dimtipo.hasMany(this, {
        foreignKey: 'id_tipo',
      });
      this.belongsTo(models.dimtipo, {
        foreignKey: 'id_tipo',
        targetKey: 'id_tipo',
        as: 'tipo',
      });

      models.dimestado_incidencia.hasMany(this, {
        foreignKey: 'id_estado_incidencia',
      });
      this.belongsTo(models.dimestado_incidencia, {
        foreignKey: 'id_estado_incidencia',
        targetKey: 'id_estado_incidencia',
        as: 'estadoIncidencia',
      });

      models.dimestamento.hasMany(this, {
        foreignKey: 'id_estamento',
      });
      this.belongsTo(models.dimestamento, {
        foreignKey: 'id_estamento',
        targetKey: 'id_estamento',
        as: 'estamento',
      });

      models.dimzona.hasMany(this, {
        foreignKey: 'id_zona',
      });
      this.belongsTo(models.dimzona, {
        foreignKey: 'id_zona',
        targetKey: 'id_zona',
        as: 'zona',
      });

      models.dimcategoria_incidencia.hasMany(this, {
        foreignKey: 'id_categoria_incidencia',
      });
      this.belongsTo(models.dimcategoria_incidencia, {
        foreignKey: 'id_categoria_incidencia',
        targetKey: 'id_categoria_incidencia',
        as: 'categoriaIncidencia',
      });

      models.dimfacultad.hasMany(this, {
        foreignKey: 'id_facultad',
      });
      this.belongsTo(models.dimfacultad, {
        foreignKey: 'id_facultad',
        targetKey: 'id_facultad',
        as: 'facultad',
      });

      models.dimfecha.hasMany(this, {
        foreignKey: 'id_fecha',
      });
      this.belongsTo(models.dimfecha, {
        foreignKey: 'id_fecha',
        targetKey: 'id_fecha',
        as: 'fecha',
      });
    }
  }

  factIncidenciasModel.init(factIncidenciasSchema, {
    sequelize,
    modelName: 'factincidencias',
    freezeTableName: true,
  });
  return factIncidenciasModel;
};

module.exports.factIncidenciasSchema = factIncidenciasSchema;
