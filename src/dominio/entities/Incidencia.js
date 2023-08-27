// import { v4 as uuidv4 } from 'uuid';
// import { IUser } from './interfaces/IUser';
// import { IIncidencia } from './interfaces/IIncident';

class Incidencia {
  idIncidencia;
  descripcion;
  procedimiento;
  latitudDispositivo;
  longitudDispositivo;
  latitudIncidencia;
  longitudIncidencia;
  idOperativo;
  idCategoriaIncidencia;
  idTipo;
  idZona;
  idDenuncia;
  idUsuarioModifica;
  constructor({
    idIncidencia,
    descripcion,
    procedimiento,
    latitudDispositivo,
    longitudDispositivo,
    latitudIncidencia,
    longitudIncidencia,
    idOperativo,
    idCategoriaIncidencia,
    idTipo,
    idZona,
    idDenuncia,
    idUsuarioModifica,
  }) {
    this.idIncidencia = idIncidencia;
    this.descripcion = descripcion;
    this.procedimiento = procedimiento;
    this.latitudDispositivo = latitudDispositivo;
    this.longitudDispositivo = longitudDispositivo;
    this.latitudIncidencia = latitudIncidencia;
    this.longitudIncidencia = longitudIncidencia;
    this.idOperativo = idOperativo;
    this.idCategoriaIncidencia = idCategoriaIncidencia;
    this.idTipo = idTipo;
    this.idZona = idZona;
    this.idDenuncia = idDenuncia;
    this.idUsuarioModifica = idUsuarioModifica;
  }
}

module.exports = Incidencia;
