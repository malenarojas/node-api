const express = require('express');
// import { body } from 'express-validator';
const jwt = require('jsonwebtoken');

const { Password } = require('../../../../utils/password');
const db = require('../../../postgresDB/models/index.js');

const {
  NotificacionService,
} = require('./../../../../dominio/NotificacionService.js');

const router = express.Router();

router.post(
  '/',
  // [
  // body('email').isEmail().withMessage('Email must be valid'),
  // body('password')
  //   .trim()
  //   .notEmpty()
  //   .withMessage('You must supply a password'),
  // ],
  // validateRequest,
  async (req, res) => {
    const payload = req.body;
    try {
      console.log(`payload: ${JSON.stringify(payload, null, 4)}`);
      const existingStamentUser = await db.ESTAMENTO.findOne({
        where: { codigo: parseInt(payload.codigo), idTipoEstamento: 1 },
        raw: true,
      });

      console.log(
        `existingStamentUser: ${JSON.stringify(existingStamentUser, null, 4)}`
      );
      if (!existingStamentUser) {
        return res.send({
          data: null,
          message: 'El usuario no está registrado como administrativo.',
        });
      }

      const existingUser = await db.USUARIO.findOne({
        where: { idUsuario: existingStamentUser.idUsuario },
        raw: true,
      });

      if (!existingUser) {
        return res.send({
          data: null,
          message: 'Ocurrió un problema, vuelva a intentarlo.',
        });
      }

      const passwordsMatch = await Password.compare(
        existingUser.contrasena,
        payload.contrasena
      );

      if (!passwordsMatch) {
        return res.send({ data: null, message: 'Credenciales inválidas.' });
      }

      // Generate JWT
      const userJwt = jwt.sign(
        {
          idUsuario: existingUser.idUsuario,
          codigo: existingStamentUser.codigo,
        },
        process.env.JWT_KEY
      );

      // Store it on session object
      req.session = {
        jwt: userJwt,
      };

      console.log(`req.session ${JSON.stringify(req.session, null, 4)}`);

      res.status(200).send({
        data: { ...existingUser, jwt: userJwt },
        message: 'Usuario logueado exitosamente.',
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        res.send({ data: null, message: error.message });
      }
    }
  }
);

const signinRouter = router;
module.exports = { signinRouter };
