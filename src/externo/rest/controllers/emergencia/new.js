const express = require('express');
const db = require('../../../postgresDB/models/index.js');

const {
  NotificacionService,
} = require('./../../../../dominio/NotificacionService.js');

const router = express.Router();

router.post('/', async (req, res) => {
  const payload = req.body;
  const headers = req.headers;
  try {
    console.log(`headers: ${JSON.stringify(headers, null, 4)}`);
    console.log(`payload: ${JSON.stringify(payload, null, 4)}`);

    const existingUser = await db.USUARIO.findOne({
      // include: [
      //   {
      //     model: db.ESTAMENTO,
      //     // as: 'estamento',
      //     attributes: ['idUsuario', 'codigo'],
      //   },
      // ],
      where: { idUsuario: payload.idUsuario },
      raw: true,
    });

    if (!existingUser) {
      throw new Error('El usuario que solicita el auxilio no está registrado.');
    }

    // console.log(`existingUser: ${JSON.stringify(existingUser, null, 4)}`);
    const notificacionData = {
      titulo: '¡Auxilio, por favor!',
      cuerpo: `Soy ${existingUser.nombres} ${existingUser.apellidos}, con código de estudiante 218123821, me encuentro en una situación de emergencia y necesito ayuda lo antes posible. ¡Gracias!`,
      descripcion: '',
    };

    console.log(
      `notificacionData: ${JSON.stringify(notificacionData, null, 4)}`
    );

    const tokensObjects = await db.USUARIO.findAll({
      attributes: ['tokenNotificacion'],
      raw: true,
    });

    let tokens = [];
    for (const t of tokensObjects) {
      if (t.tokenNotificacion && t.tokenNotificacion != null) {
        tokens.push(t.tokenNotificacion);
      }
    }

    if (tokens.length > 0) {
      NotificacionService.enviarNotificaciones(tokens, notificacionData);
    }

    res.status(201).send({
      data: null,
      message: 'Emergencia creada exitosamente.',
    });
  } catch (error) {
    console.error(`Error al crear la incidencia: ${error.message}`);
    res.send({ data: null, message: error.message });
  }
});

const newEmergenciaRouter = router;

module.exports = { newEmergenciaRouter };
