const express = require('express');
// import { body } from 'express-validator';
const jwt = require('jsonwebtoken');

const db = require('../../../postgresDB/models/index.js');
const {
  NotificacionService,
} = require('../../../../dominio/NotificacionService.js');

const router = express.Router();

router.post('/nuevo', async (req, res) => {
  const payload = req.body;
  const headers = req.headers;
  try {
    console.log(`headers: ${JSON.stringify(headers, null, 4)}`);
    console.log(`payload: ${JSON.stringify(payload, null, 4)}`);
    const headerJWT = headers.jwt;
    if (!headerJWT || headerJWT === '') {
      throw new Error('Debe enviar el jwt en los headers del request.');
    }
    console.log(`headers.jwt: ${headers.jwt}`);

    const payloadVerify = jwt.verify(headerJWT, process.env.JWT_KEY);
    console.log(`payloadVerify -> ${JSON.stringify(payloadVerify, null, 4)}`);

    const existingUser = (
      await db.USUARIO.findOne({
        where: { idUsuario: payloadVerify.idUsuario },
      })
    )?.dataValues;

    console.log(
      `existingUser dataValues: ${JSON.stringify(existingUser, null, 4)}`
    );

    if (!existingUser) {
      throw new Error(
        'El usuario que solicita el registro del token de notificación no está registrado.'
      );
    }

    if (payload.tokenNotificacion) {
      await db.USUARIO.update(
        { tokenNotificacion: payload.tokenNotificacion },
        {
          where: {
            idUsuario: existingUser.idUsuario,
          },
        }
      );

      const notificacionData = {
        titulo: `Bienvenido ${existingUser.nombres}`,
        cuerpo: `¿Qué planes para hoy?`,
        descripcion:
          'Con el ID puede realizar el seguimiento correspondiente a la incidencia.',
      };

      const usuario = await db.USUARIO.findOne({
        attributes: ['tokenNotificacion'],
        where: {
          idUsuario: existingUser.idUsuario,
        },
        raw: true,
      });

      console.log(`token: ${JSON.stringify(usuario.tokenNotificacion, null)}`);
      NotificacionService.enviarNotificacion(
        usuario.tokenNotificacion,
        notificacionData
      );
    }

    res.status(200).send({
      data: { tokenNotificacion: payload.tokenNotificacion },
      message: 'Token de notificación registrado exitosamente.',
    });
  } catch (error) {
    console.error(error.message);
    res.send({ data: null, message: error.message });
  }
});

const nuevoTokenNotificacionFirebaseRouter = router;

module.exports = { nuevoTokenNotificacionFirebaseRouter };
