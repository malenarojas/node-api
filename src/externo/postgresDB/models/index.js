'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/database.json')[env];
const config = require(__dirname + '/../config/database.js')[env];
const configOLTP = config.incidenciasOltp;
const configOLAP = config.incidenciasOlap;

const db = {};
let sequelize, bdIncidenciasOLAP;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], configOLTP);
  bdIncidenciasOLAP = new Sequelize(
    process.env[config.use_env_variable],
    configOLAP
  );
} else {
  sequelize = new Sequelize(
    configOLTP.database,
    configOLTP.username,
    configOLTP.password,
    configOLTP
  );

  bdIncidenciasOLAP = new Sequelize(
    configOLAP.database,
    configOLAP.username,
    configOLAP.password,
    configOLAP
  );
}

fs.readdirSync(`${__dirname}/incidenciasOLTP/`)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(`${__dirname}/incidenciasOLTP/`, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

fs.readdirSync(`${__dirname}/incidenciasOLAP/`)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(`${__dirname}/incidenciasOLAP/`, file))(
      bdIncidenciasOLAP,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.bdIncidenciasOLAP = bdIncidenciasOLAP;
db.Sequelize = Sequelize;

module.exports = db;
