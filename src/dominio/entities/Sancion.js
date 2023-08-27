
class Sancion {
    idSancion;
    idIncidencia;
    descripcion;
    montoTotal;
    habilitado;
    idTipoSancion;
    constructor({
        idSancion,
        idIncidencia,
        descripcion,
        montoTotal,
        habilitado,
        idTipoSancion,
    }) {
      this.idSancion = idSancion;
      this.idIncidencia = idIncidencia;
      this.descripcion = descripcion;
      this.montoTotal = montoTotal;
      this.habilitado = habilitado;
      this.idTipoSancion = idTipoSancion;
    }
  }
  
  module.exports = Sancion;