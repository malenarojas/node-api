const db = require('./../../externo/postgresDB/models/index.js');
const { Usuario } = require('./Usuario.js');

class Operativo extends Usuario {
  fechaIngreso;

  constructor(data) {
    super(data);
    this.fechaIngreso = data.fechaIngreso;
  }

  validarUsuario() {
    throw new Error('Method not implemented. Operativo');
  }

  async registrarOperativo() {
    const nuevoUsuario = await db.Usuario.create({
      nombres: this.nombres,
      apellidos: this.apellidos,
      ci: this.ci,
      telefono: this.telefono,
      tokenNotificacion: this.tokenNotificacion,
      contrasena: this.contrasena,
      tipo: this.tipo,
      habilitado: this.habilitado,
    });
    if (!nuevoUsuario) {
      throw new Error('Method not implemented.');
    }
    return await db.Operativo.create({
      idUsuario: nuevoUsuario.idUsuario,
      fechaIngreso: this.fechaIngreso,
    });
  }
}

module.exports = { Operativo };
