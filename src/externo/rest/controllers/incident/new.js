const express = require('express');
// import { body } from "express-validator";
const Incidencia = require('../../../../dominio/entities/Incidencia.js');
const db = require('../../../postgresDB/models/index.js');
const jwt = require('jsonwebtoken');
const sequelize = db.sequelize;

const {
  NotificacionService,
} = require('./../../../../dominio/NotificacionService.js');

const router = express.Router();
const fs = require('fs');

router.post('/', async (req, res) => {
  const payload = req.body;
  const headers = req.headers;
  const t = await sequelize.transaction();
  try {
    console.log(`headers: ${JSON.stringify(headers, null, 4)}`);
    console.log(`payload: ${JSON.stringify(payload, null, 4)}`);
    const headerJWT = headers.jwt;
    if (!headerJWT || headerJWT === '') {
      throw new Error('Debe enviar el jwt en los headers del request.');
    }

    const payloadVerify = jwt.verify(headerJWT, process.env.JWT_KEY);
    console.log(`payloadVerify -> ${JSON.stringify(payloadVerify, null, 4)}`);

    console.log(
      `req.currentUser -> ${JSON.stringify(req?.currentUser, null, 4)}`
    );
    // // Capturar el idUsuario de la sessión req?.currentUser
    // const userPayload: UserPayload = req.currentUser!;

    // const existingUser = await db.USUARIO.findOne({
    //   where: { idUsuario: payload.idUsuario },
    // });
    // Capturar el idUsuario de la sessión req?.currentUser

    // const existingUserexistingUser = await db.USUARIO.findOne({
    //   where: { idUsuario: payloadVerify.idUsuario },
    // });

    // if (!existingUser) {
    //   throw new Error(
    //     'El usuario que solicita la incidencia no está registrado.'
    //   );
    // }
    // Se realizan las validades correspondientes en la entidad
    const incident = new Incidencia({
      descripcion: payload.descripcion,
      procedimiento: payload.procedimiento,
      latitudDispositivo: parseFloat(payload.latitudDispositivo),
      longitudDispositivo: parseFloat(payload.longitudDispositivo),
      latitudIncidencia: parseFloat(payload.latitudIncidencia),
      longitudIncidencia: parseFloat(payload.longitudIncidencia),
      idOperativo: payload.idOperativo,
      idCategoriaIncidencia: payload.idCategoriaIncidencia,
      idTipo: payload.idTipo,
      idZona: payload.idZona,
      //idDenuncia: parseInt(payload.idDenuncia),
      // idUsuarioModifica es el usuario que modifica esta incidencia,
      // como aquí se registra, entonces se coloca el idOperativo que la crea
      // idUsuarioModifica: payloadVerify.idUsuario,
      idUsuarioModifica: payload.idOperativo || 0,
    });
    console.log(`incident ${JSON.stringify(incident, null, 4)}`);

    // Registro de Incidencia en DB
    const newIncident = (
      await db.INCIDENCIA.create(
        {
          descripcion: incident.descripcion,
          procedimiento: incident.procedimiento,
          latitudDispositivo: incident.latitudDispositivo,
          longitudDispositivo: incident.longitudDispositivo,
          latitudIncidencia: incident.latitudIncidencia,
          longitudIncidencia: incident.longitudIncidencia,
          idOperativo: incident.idOperativo,
          idCategoriaIncidencia: incident.idCategoriaIncidencia,
          idTipo: incident.idTipo,
          idZona: incident.idZona,
          idDenuncia: incident.idDenuncia,
          idUsuarioModifica: incident.idUsuarioModifica,
        },
        { transaction: t }
      )
    )?.dataValues;

    if (!newIncident) {
      throw new Error(
        'Ocurrió un inconveniente al registrar la Incidencia, comuníquese con administración.'
      );
    }

    // Registro Incidencia Estado en DB
    const newEstadoIncidencia = await db.INCIDENCIA_ESTADO.create(
      {
        idIncidencia: newIncident.idIncidencia,
        idEstado: 1,
      },
      { transaction: t }
    );

    if (!newEstadoIncidencia) {
      throw new Error(
        'Ocurrió un inconveniente al registrar el estado de la Incidencia, comuníquese con administración.'
      );
    }

    // Registro Estamento Incidencia en DB
    // const newIncidenciaEstamento = db.
    // Se debe notificar al usuario Operativo que crea la incidencia
    // y al todos con el rol administrativos
    const estamentos = payload.idEstamentos;
    const infractores = payload.ciInfractores;
    const idCategoriaForaneo = payload.idCategoriaIncidencia;
    if (estamentos) {
      for (const idEstamento of estamentos) {
        await db.INCIDENCIA_ESTAMENTO.create(
          {
            idIncidencia: newIncident.idIncidencia,
            idEstamento: idEstamento,
          },
          { transaction: t }
        );
      }
    } else if (infractores) {
      // Si no hay estamentos, entonces debe haber infractores.
    } else if (idCategoriaForaneo == 2) {
      // Si no hay estamentos ni infractores (ci), pero es Categoría Foráneo,
      // puede registrar sin Ci.
    } else {
      throw new Error(
        'Si la incidencia es categoría Normal, debe haber al menos 1 estamento para registrar.'
      );
    }

    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.NODE_PORT || 3001;
    const path = 'assets/img/incidencias'; // Ruta de destino
    if (payload.imagenes) {
      const medias = payload.imagenes;
      for (const media of medias) {
        const fileName =
          Date.now().toString() + newIncident.idIncidencia + '.png';
        // Decodifica la imagen base64 en datos binarios
        const imageBuffer = Buffer.from(media, 'base64');

        const directoryPath = path + '/' + newIncident.idIncidencia;
        if (!fs.existsSync('public/' + directoryPath)) {
          fs.mkdirSync('public/' + directoryPath);
        }
        // Escribe los datos binarios en un nuevo archivo
        fs.writeFileSync(
          'public/' + directoryPath + '/' + fileName,
          imageBuffer
        );

        const url =
          'http://' + host + ':' + port + '/' + directoryPath + '/' + fileName;
        const truncatedBase64 = media.substring(0, 255);

        await db.MEDIA_INCIDENCIA.create(
          {
            url: url,
            base64: truncatedBase64,
            idIncidencia: newIncident.idIncidencia,
          },
          { transaction: t }
        );
      }
    }

    const notificacionData = {
      titulo: 'Incidencia registrada exitosamente.',
      cuerpo: `La incidencia tiene el siguiente ID asignado: ${newIncident.idIncidencia}`,
      descripcion:
        'Con el ID puede realizar el seguimiento correspondiente a la incidencia.',
    };

    await t.commit();

    const tokensObjects = await db.USUARIO.findAll({
      attributes: ['tokenNotificacion'],
      //  Notificar a todos los usuarios con rol de administrativos
      // where: {
      //   idUsuario: payloadVerify.idUsuario,
      // },
      raw: true,
    });
    console.log(`tokensObjects: ${JSON.stringify(tokensObjects, null, 4)}`);
    // const tokens = tokensObjects.map((token) => token.tokenNotificacion);
    let tokens = [];
    for (const t of tokensObjects) {
      if (t.tokenNotificacion && t.tokenNotificacion != null) {
        console.log(
          `t.tokenNotificacion: ${JSON.stringify(t.tokenNotificacion, null, 4)}`
        );
        tokens.push(t.tokenNotificacion);
      }
    }
    if (tokens.length > 0) {
      NotificacionService.enviarNotificaciones(tokens, notificacionData);
    }

    res.status(201).send({
      data: newIncident,
      message: 'Incidencia creada exitosamente.',
    });
  } catch (error) {
    console.error(`Error al crear la incidencia: ${error.message}`);
    await t.rollback();
    res.send({ data: null, message: error.message });
  }

  //MEDIA

  /* 

for (const media of medias) {
  // Genera un nombre de archivo único
  const fileName = Date.now().toString() + '.png'; // Puedes usar otra extensión si corresponde

 
  
  // Continúa con el resto de tu lógica si es necesario
}*/
});

const newIncidentRouter = router;

module.exports = { newIncidentRouter };
