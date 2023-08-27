const db = require('./../../externo/postgresDB/models/index.js');
const { Usuario } = require('./Usuario.js');

class Estamento extends Usuario {
  codigo;
  correo;
  contadorPanico;
  idTipoEstamento;
  idFacultad;

  constructor(data) {
    super(data);
    this.codigo = data.codigo;
    this.correo = data.correo;
    this.contadorPanico = data.contadorPanico;
    this.idTipoEstamento = data.idTipoEstamento;
    this.idFacultad = data?.idFacultad;
  }

  validarUsuario() {
    throw new Error('Method not implemented. Estamento');
  }

  async registrarEstamento() {
    // return new Promise(async (resolve, reject) => {
    try {
      const nuevoUsuario = (
        await db.Usuario.create({
          nombres: this.nombres,
          apellidos: this.apellidos,
          ci: this.ci,
          telefono: this.telefono,
          tokenNotificacion: this.tokenNotificacion,
          contrasena: this.contrasena,
          tipo: this.tipo,
          habilitado: this.habilitado,
        })
      )?.dataValues;
      if (!nuevoUsuario) {
        return new Error('Method not implemented.');
      }
      // resolve(
      return (
        await db.Estamento.create({
          idUsuario: nuevoUsuario.idUsuario,
          codigo: this.codigo,
          correo: this.correo,
          contadorPanico: this.contadorPanico,
          idTipoEstamento: this.idTipoEstamento,
          idFacultad: this.idFacultad,
        })
      )?.dataValues;
      // return ss;
      // );
    } catch (error) {
      // if (error instanceof Error) reject(new Error(error.message));
      if (error instanceof Error) throw new Error(error.message);
    }
    // });
  }
}

module.exports = { Estamento };
