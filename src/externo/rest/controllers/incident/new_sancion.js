const express = require('express');
// const { body } = require("express-validator");

const db = require('../../../postgresDB/models/index.js');
const jwt = require('jsonwebtoken');

const Sancion = require('../../../../dominio/entities/Sancion.js');

const router = express.Router();

router.post('/', async (req, res) => {
  const payload = req.body;
  const headers = req.headers;
  try {
  
   /* const headerJWT = headers.jwt;
    if (!headerJWT || headerJWT === '') {
      throw new Error('Debe enviar el jwt en los headers del request.');
    }
    console.log(`headers.jwt: ${headers.jwt}`);

    const payloadVerify = jwt.verify(headerJWT, process.env.JWT_KEY);
    console.log(
      `payloadVerify -> ${JSON.stringify(payloadVerify, null, 4)}`
    );

    console.log(
      `req.currentUser -> ${JSON.stringify(req.currentUser, null, 4)}`
    );

    const existingUser = await db.USUARIO.findOne({
      where: { idUsuario: payloadVerify.idUsuario },
    });

    if (!existingUser) {
      throw new Error('El usuario que solicita la sancion no está registrado.');
    }
*/
    const sancion = new Sancion({
        idIncidencia: payload.idIncidencia,
      descripcion: payload.descripcion,
      montoTotal: payload.montoTotal,
      habilitado: payload.habilitado,
      idTipoSancion: payload.idTipoSancion,
    });
    console.log(`sancion ${JSON.stringify(sancion, null, 4)}`);

    const newSancion = await db.SANCION.create({
        idIncidencia: sancion.idIncidencia,
      descripcion: sancion.descripcion,
      montoTotal: sancion.montoTotal,
      habilitado: sancion.habilitado,
      idTipoSancion: sancion.idTipoSancion,
    });

    res.status(201).send({
      data: newSancion,
      message: 'Sancion creada exitosamente.',
    });
  } catch (error) {
    console.error(`Error al crear la sancion: ${error.message}`);
    res.send({ data: null, message: error.message });
  }
});



const newSancionRouter = router;

module.exports = { newSancionRouter };

