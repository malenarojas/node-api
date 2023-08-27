'use strict';
const { Model, DataTypes } = require('sequelize');

const UsuarioSchema = {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idRol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    references: {
      model: 'ROL',
      key: 'idRol',
    },
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ci: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tokenNotificacion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  habilitado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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
  class UsuarioModel extends Model {
    idUsuario;
    idRol;
    nombres;
    apellidos;
    ci;
    telefono;
    tokenNotificacion;
    contrasena;
    /**
     * Tipo Estamento: 0
     * Tipo Operativo: 1
     */
    tipo;
    habilitado;


    static associate(models) {
      models.ROL.hasMany(this, {
        foreignKey: 'idRol',
      });
      this.belongsTo(models.ROL, {
        foreignKey: 'idRol',
        targetKey: 'idRol',
        as: 'rol',
      });
    
    }
  }

  UsuarioModel.init(UsuarioSchema, {
    sequelize,
    modelName: 'USUARIO',
    freezeTableName: true,
  });
  return UsuarioModel;
};

module.exports.UsuarioSchema = UsuarioSchema;
