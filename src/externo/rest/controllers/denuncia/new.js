const express = require('express');
// const { body } = require("express-validator");

const db = require('../../../postgresDB/models/index.js');
const jwt = require('jsonwebtoken');

const Denuncia = require('../../../../dominio/entities/Denuncia.js');

const router = express.Router();

router.post('/', async (req, res) => {
  const payload = req.body;
  const headers = req.headers;
  try {
    console.log(`headers aaaaa: ${JSON.stringify(headers, null, 4)}`);
    const headerJWT = headers.jwt;
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
      throw new Error('El usuario que solicita la denuncia no está registrado.');
    }

    const denuncia = new Denuncia({
      descripcion: payload.descripcion,
      telefonoContacto: payload.telefonoContacto,
      idTipoDenuncia: payload.idTipoDenuncia,
      idUsuario: payload.idUsuario,
    });
    console.log(`denuncia ${JSON.stringify(denuncia, null, 4)}`);

    const newDenuncia = await db.DENUNCIA.create({
      descripcion: denuncia.descripcion,
      telefonoContacto: denuncia.telefonoContacto,
      idTipoDenuncia: denuncia.idTipoDenuncia,
      idUsuario: denuncia.idUsuario,
    });

    res.status(201).send({
      data: newDenuncia,
      message: 'Denuncia creada exitosamente.',
    });
  } catch (error) {
    console.error(`Error al crear la denuncia: ${error.message}`);
    res.send({ data: null, message: error.message });
  }
});



const newDenunciaRouter = router;

module.exports = { newDenunciaRouter };

