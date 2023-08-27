
class Denuncia {
    idDenuncia;
      descripcion;
      telefonoContacto;
      idTipoDenuncia;
      idUsuario;
    constructor({
      idDenuncia,
      descripcion,
      telefonoContacto,
      idTipoDenuncia,
      idUsuario,
    }) {
      this.idDenuncia = idDenuncia;
      this.descripcion = descripcion;
      this.telefonoContacto = telefonoContacto;
      this.idTipoDenuncia = idTipoDenuncia;
      this.idUsuario = idUsuario;
    }
  }
  
  module.exports = Denuncia;