class Usuario {
  idUsuario;
  nombres;
  apellidos;
  ci;
  telefono;
  tokenNotificacion;
  codigo;
  contrasena;
  tipo;
  habilitado;

  constructor({
    idUsuario,
    nombres,
    apellidos,
    ci,
    telefono,
    tokenNotificacion,
    codigo,
    contrasena,
    tipo,
  }) {
    this.idUsuario = idUsuario;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.ci = ci;
    this.telefono = telefono;
    this.tokenNotificacion = tokenNotificacion;
    this.codigo = codigo;
    this.contrasena = contrasena;
    /**
     * Tipo Estamento: 0
     * Tipo Operativo: 1
     */
    this.tipo = tipo;
    this.habilitado = true;
  }

  validarUsuario() {}

  validate() {
    if (this.codigo <= 1 || this.contrasena.length < 6) {
      throw new Error(
        'Las credenciales ingresadas no cumplen con el formato solicitado.'
      );
    }
  }
}

module.exports = { Usuario };
